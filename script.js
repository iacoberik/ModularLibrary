(function () {
  var people = {
    people: ['Will', 'Lora'],
    init: function () {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    bindEvents : function(){
        this.button.onclick = () => this.addPerson();
       // this.ul.delegate('i.remove', 'click', this.removePerson.bind(this));
       this.ul.onclick = (e) => {
        if (e.target.matches('i.remove')){
            console.log(e.target)
            this.removePerson(e);
        }
       }
    },
    cacheDom: function () {
      this.$el = document.querySelector(".people_module");
      this.template = this.$el.querySelector(".people-template").innerHTML;
      this.button = this.$el.querySelector("button");
      this.input = this.$el.querySelector("input");
      this.ul = this.$el.querySelector("ul");
    },
    render: function () {
        var data = {
            people: this.people,
        };
        this.ul.innerHTML = Mustache.render(this.template, data);
    },
    addPerson: function(){
        this.people.push(this.input.value);
        this.render();
        this.input.value = '';
    },
    removePerson: function(e){
        // e.parentNode.remove();
        // var i 
        var remove = e.target.parentNode;
        var i = Array.prototype.indexOf.call(this.ul.querySelectorAll('li'), remove);
        this.people.splice(i, 1);
        this.render()
    }
  };
  people.init();
})();
