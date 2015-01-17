# Clepta
Clepta is greek for Thief. Clepta is a JavaScript library made to be a PoC to
show how easy it is to do targetted password extraction on websites.

## What does it do?
Clepta is able to indentify forms with login details in them, and retrieve
them. It is then able to send the extracted information to a specified
endpoint. If you want to see it in action, see the [demo].

## How does it accomplish what it does?
Clepta easily finds forms based on the form's field types. Simply put, the
internal 'Finder' used to find login forms, looks for forms with a password
field and a normal text field. When both are present, a form is marked as login
form. It could of course be a registration form, but all we care about is the
data, so that doesn't really matter.

## Why did you make this?
Well, I had this idea a while back, and wanted to illustrate how easy it is to
create a 'smart' keylogger, that just sends relevant data. This also
incorporates the fact that Chrome auto-fills the forms (using a similar method)
and this data is also there to be stolen.

## How can this be used in a real-life scenario?
There are a few ways on how this could be used. One being to use this code in a
browser extension, infecting every page the user visits and storing it in the
user's `localStorage` and sending it when it has some more data (to save server
power). You could also do a MITM attack, inject this script in a page and work 
with that.

## Can I use this in my virus/malware/attack?
I'd prefer if you didn't.

[demo]: http://jeroenvisser101.github.io/clepta/
