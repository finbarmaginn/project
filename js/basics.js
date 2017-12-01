// this is a single line comment

/* this is the start of a multi line comment

  Javascript has different variable types, small simple list of types below,
  note that this is not an extensive list.

  [] = Array

  {} = Object

  1 = Integer / Number

  "1" = String
  ------------------------------------------------------------------------------
  JSON = JavaScript Object Notation:
  ------------------------------------------------------------------------------
  [{}, {}, {}] = array of objects
  ["Talking", "Muck"] = array of strings

  simple object example:
  var person = {name: "foobar", source: "value", age: 10}
  each property has a value attached to it (key value pair). to get the value
  "foobar" from the object we need to use the following key:
    person.name (will return "foobar")

  JSONExample = [
    {
      name: "Finbar",
      surname: "Maginn"
      dob: "20/09/1990",
    }, {
      name: "Cormac",
      surname: "McGowan",
      dob: "02/08/2000"
    }
  ]

  the example above is an array of objects, each object represents a person and
  each person has a name surname and dob properties defined.

  to access the first person in the array's DOB then you simply type the
  following:
  JSONExample[0].dob === "20/09/1990"

  to access the scond perons in the array's name then you would use the
  following key:
  JSONExample[1].name === "Cormac"

  just some stuff to start thinking about and how you might want to use a JSON
  as a data structure.

this is the end of a multi line comment */