---

//in single child class components works in this way

// -Parent Constructor
// -Render
// -Child constructor
// -Child Render
// -childComponentDidMount
// -Parent ComponentDidMount

// but in two or more children class components

// -Parent Constructor
// -Render
// -first Child constructor
// -first Child Render

// -second Child constructor
// -second Child Render

// -first and second children ComponentDidMount
// -Parent ComponentDidMount

// URL FOR DIAGRAM https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

