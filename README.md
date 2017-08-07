```diff
- NOTE: This package is not maintained anymore.
- If you want to help, please reach out to gwendall.esnault@gmail.com
```

Meteor Email Watch
===================

Watch emails sent with a callback.

Installation
------------

``` sh
meteor add gwendall:email-watch
```

Methods
-------


``` javascript
Email.onSend(function(err, res) {
  // Deal with it
  // err: Meteor error
  // res: Email options -- { from, to, etc. }
});
```

To do
-----

Handle SMTP errors
