(function() {
    window.App = {
        Models: {},
        Views: {},
        Collections: {}
    };

    // App.Models.Person
    // App.Views.PersonView
    // App.Collections.PeopleCollection

    // Хелпер шаблона (в основном пишется в отдельных модулях, в замыканиях и прочее)
    window.template = function(id) {
        return _.template($(`#${id}`).html()) ;
    };






    // Модель человека (модель одного человека)
    App.Models.Person = Backbone.Model.extend({
        defaults: {
            name: 'Dima',
            age: 48,
            job: 'Доктор',
            email: "Sincere@april.biz"
        },

        validate: function( attrs, options ) {
            if(attrs.age <= 0) {
                return 'Вы указали некорректный возраст';
            }

            if(!attrs.name) {
                return 'У вас нет имени?';
            }
        },
    });
    var person = new App.Models.Person();

    // Список людей (коллекция моделей)
    App.Collections.PeopleCollection = Backbone.Collection.extend({
        model: App.Models.Person,

    });


    // Вид одного человека
    App.Views.PersonView = Backbone.View.extend({
        tagName: 'li',

        template: template('person-id'),

        initialize: function() {
            this.render();
        },

        

        render: function() {
            
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });

    //Вид списка людей (вид коллекции)

    App.Views.PeopleView = Backbone.View.extend({
        tagName: 'ul',

        initialize: function() {

        },

        render: function() {
            // пройтись по всему списку и отрендерить дкаждый personView
                // Можно использовать underscore _.each(this.collection) 
                // Можно использовать jQuery $.each(this.collection)
                // В прототипе коллекции есть метод each, который лучше использовать
                this.collection.each(function(person) {
                    var personView = new App.Views.PersonView({model: person});
                    
                    this.$el.append(personView.render().el);

                }, this);
            // Вставить в главный тег ul (this.$el)
                return this;
        }
    });


    // передаем данные в коллекцию моделей

    var peopleCollection = new App.Collections.PeopleCollection([
        {
            name: 'Ivan',
            age: 5,
        },
        {
            name: 'Anna',
            age: 21,
            job: 'Студентка'
        },
        {
            name: 'Alex',
            age: 35, 
            job: 'Сантехник'
        },
        {
            name: 'Anton',
            job: 'Таксист'
        }
    ]);

    var peopleView = new App.Views.PeopleView({collection: peopleCollection});


    $(document.body).append(peopleView.render().el);

}());