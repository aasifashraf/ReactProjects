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

---

// here i used lazy loading or onloading demand or dynamic loading or dynamic import or chunkking or code splitting
// because reduces loading time it loads only when it called or clicked
