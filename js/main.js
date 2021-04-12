(function() {
    window.App = {
        Models: {},
        Views: {},
        Collections: {}
    };


    // Хелпер шаблона (в основном пишется в отдельных модулях, в замыканиях и прочее)
    window.template = function(id) {
        return _.template($(`#${id}`).html()) ;
    };

//////////////Создаем классы//////////////////

    //Модель простой задачи
    App.Models.Task = Backbone.Model.extend({});
    // Вид одной задачи
    App.Views.Task = Backbone.View.extend({
        // Для вида прописываем корневой элемент
        tagName: 'li',

        // Функция рендера для отдельной задачи
        render: function() {
            // Функция рендер будет наполнять корневой элемент
            this.$el.html( this.model.get('title') );
            return this;
        }
    });

///////////////Создаем экземпляры классов///////////////

    // Для модели прописывам данные
    // var task = new App.Models.Task({
    //     title: 'Сходить в магазин',
    //     priority: 4
    // });

    //......... Создаем коллекцию для моделей

    // создадим сначала класс

    App.Collections.Tasks = Backbone.Collection.extend({
        model: App.Models.Task,
    });

    // Надо создать для коллеции вид, который будет рендерить сразу все модели
    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {

        },

        render: function() {
            console.log(this.collection);
            this.collection.each(this.addOne, this);
            return this;
        },
        addOne: function(task) {
            // Создаем новый дочерний вид
                // Для вида надо задать модель обязательно
            var taskView = new App.Views.Task({model: task});
            // Добавляем его в корневой элемент
            this.$el.append(taskView.render().el);
        }
    });

   /////Создаем экземпляр класса коллекции

    var tasksCollection = new App.Collections.Tasks([
        {
            title: 'Сходить в магазин',
            priority: 4
        },
        {
            title: 'Сделать задание',
            priority: 3
        },
        {
            title: 'Погулять с собакой',
            priority: 2
        },
        {
            title: 'Работа',
            priority: 1
        }
    ]);

    var tasksView = new App.Views.Tasks({collection: tasksCollection});

    tasksView.render();
    $('body').html(tasksView.el);

}());