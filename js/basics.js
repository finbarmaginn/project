// this is a single line comment

/* this is the start of a multi line comment

  Javascript has different variable types, small simple list of types below,
  note that this is not an extensive list.

  [] = Array

  {} = Object

  1 = Integer / Number

  "1" = String

  [{}, {}, {}] = array of objects

  ["Talking", "Muck"] = array of strings

  var person = {name: "foobar", source: "value", age: 10}: simple object example:
    each property has a value attached to it. to get the value foobar we need to
    use the following key: person.name

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
  JSONExample[1].name === "Cormac"

this is the end of a multi line comment */