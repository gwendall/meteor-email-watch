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
