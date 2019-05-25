# JSX intro

> video: https://www.youtube.com/watch?v=yc8fg7gWbBA

# Use this site to start writing some JSX: https://babeljs.io/repl
Note: this is why it is going to be hard to do JSX without using react

> See jsx babel examples below...

Note: enter the xml tag(s) code on left window side

* `<div>Hello</div>`

results in...
```
"use strict";

React.createElement("div", null, "Hello");
```

* `<div name="jamespagedev">Hello</div>`

results in...
```
"use strict";

React.createElement("div", {
  name: "jamespagedev"
}, "Hello");
```

* `<div name="true">Hello</div>`

results in...
```
"use strict";

React.createElement("div", {
  name: "true"
}, "Hello");
```

* `<div name>Hello</div>`

results in...
```
"use strict";

React.createElement("div", {
  name: true
}, "Hello");
```

* `<div name={false}>Hello</div>`

results in...
```
"use strict";

React.createElement("div", {
  name: false
}, "Hello");
```

* `<div name={15}>Hello</div>`

results in...
```
"use strict";

React.createElement("div", {
  name: 15
}, "Hello");
```

* `<div><h1>hello</h1></div>`

results in...
```
"use strict";

React.createElement("div", null, React.createElement("h1", null, "hello"));
```

## Code from video located in "jsx_intro/learn-jsx/...."