# datemaker

Get the current time and date in local time or UTC, in the format:
hours:minutes:seconds:milliseconds - dd/mm/yyyy

# Install

`npm install datemaker`

# Use

Import from node modules
`const datemaker = require('datemaker');`

Return local time and date as a string
`datemaker.local()`

Return UTC time and date as a string
`datemaker.UTC()`

Eg. if the current local time and date is 3.01pm, 24seconds, 356milliseconds on 28th Nov 2020:
```
console.log(datemaker.local());
// prints "13:01:24:356 - 28/11/2020"
```

