function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(food){
  if(this.stomach.length < 10){
    this.stomach.push(food)
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}




function Baby(babyAttrs) {
  Person.call(this, babyAttrs);
  this.favoriteToy = babyAttrs.favoriteToy;
}

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}


const newBaby = new Baby({
    name: `Lucy`,
    age: 5,
    favoriteToy: `trains`
});

Person.name('Lucy');

/*
describe('Instances of Baby', () => {
  let baby
  beforeEach(() => {
    baby = new Baby('Lucy', 5, 'trains')
  })
  it('initialize with the given name', () => {
    expect(baby.name).to.equal('Lucy')
  })
  it('initialize with the given age', () => {
    expect(baby.age).to.equal(5)
  })
  it('initialize with the given favorite toy', () => {
    expect(baby.favoriteToy).to.equal('trains')
  })
  it('get a play method from their prototype', () => {
    expect(baby.__proto__.play).to.be.not.undefined;
  })
  it('can play with favorite toy', () => {
    expect(baby.play()).to.include('trains')
  })
  it('inherit the methods on Person.prototype', () => {
    expect(Person.prototype).to.equal(baby.__proto__.__proto__)
  })
})
*/