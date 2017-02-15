# lss-inject

To install use: `bower install --save lss-inject`

[ LIVE DEMO AND API ](https://www.webcomponents.org/element/LssPolymerElements/lss-inject)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/LssPolymerElements/lss-inject)


## Senario:

```
---app-main
    --my-parent-component  <-- PROVIDER of user-manager.  user-manager lives in this component.
       -user-manager
       -component-a      
         -component-b
            -component-c
         -component-d
            -component-e
              -my-child-component   <-- needs access to user-manager becomes REQUESTER of user-manager
                -user-manager  
          -component-f
     --my-faq
     --my-feedback
```
       
## How to use:

In this example we have a single instance component that is called user-manager that we would like to use in a child component nested deep in our app.  Rather then binding the user-manager through the component tree in our app, we can simple provide and request the user-manager as seen below. 
       
### 1. Provide your component in any parent component
```typescript
@behavior(LssProviderBehavior)
@component("my-parent-component")
class MyParentComponent extends polymer.Base {
    provideInstance: (key: string, any) => void;   // stand-in properties for behavior mixins 

    ready() {
             this.provideInstance("UserManager", this.$.userManager);
    }
}
```


### 2. Request your component from any child component
```typescript
@behavior(LssRequesterBehavior)
@component("my-child-component")
class MyChildComponent extends polymer.Base {
    requestInstance: (key: string) => any; // stand-in properties for behavior mixins 

    attached() {
         this.userManager = this.requestInstance("UserManager");
    }
}
```
