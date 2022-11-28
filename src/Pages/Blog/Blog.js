import React from "react";

const Blog = () => {
  return (
    <div className="w-4/6 mx-auto my-20">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: Local state, Global state, Server state, URL state
            Let's cover each of these in detail: Local (UI) state – Local state
            is data we manage in one or another component.Local state is most
            often managed in React using the useState hook. For example, local
            state would be needed to show or hide a modal component or to track
            values for a form component, such as form submission, when the form
            is disabled and the values of a form’s inputs.Global (UI) state –
            Global state is data we manage across multiple components.Global
            state is necessary when we want to get and update data anywhere in
            our app, or in multiple components at least.A common example of
            global state is authenticated user state. If a user is logged into
            our app, it is necessary to get and change their data throughout
            ourapplication. Sometimes state we think should be local might
            become global.Server state – Data that comes from an external server
            that must be integrated with our UI state.Server state is a simple
            concept, but can be hard to manage alongside all of our local and
            global UI state.There are several pieces of state that must be
            managed every time you fetch or update data from an external server,
            including loading and error state.Fortunately there are tools such
            as SWR and React Query that make managing server state much
            easier.URL state – Data that exists on our URLs, including the
            pathname and query parameters.URL state is often missing as a
            category of state, but it is an important one.In many cases, a lot
            of major parts of our application rely upon accessing URL state. Try
            to imagine building a blog without being able to fetch a post based
            off of its slug or id that is located in the URL!There are
            undoubtedly more pieces of state that we could identify, but these
            are the major categories worth focusing on for most applications you
            build.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]]. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use
            Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern
            language.When it comes to inheritance, JavaScript only has one
            construct: objects. Each object has a private property which holds a
            link to another object called its prototype. That prototype object
            has a prototype of its own, and so on until an object is reached
            with null as its prototype.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, it can help detect early flaws in code which may be more
            difficult to find in later testing stages.A unit test is a way of
            testing a unit - the smallest piece of code that can be logically
            isolated in a system. In most programming languages, that is a
            function, a subroutine, a method or property. The isolated part of
            the definition is important.For Test-Driven Development (TDD), you
            write unit tests before writing any implementation. This makes your
            implementation details in your code shorter and easier to
            understand. In this instance, the best time to write unit tests is
            immediately. For others, most developers write unit tests after the
            code's been written.
          </p>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. Hence, the transition to Vue from either of the two is
            an easy option.Popularity. According to a survey by Stack Overflow
            40.13% of the developers believe that React is the most commonly
            used JavaScript Framework. Angular and Vue follow it with 22.96% and
            18.97%, respectively.Angular is a front-end framework with lots of
            components, services, and tools. On Angular’s site, you can see that
            they define Angular as: “The modern web developer’s platform” It is
            developed and maintained by Google developers, but curiously it is
            not used to implement any of their most common products such as
            Search or YouTube. React is considered a UI library. They define
            themselves as: “A JavaScript library for building user interfaces”
            Facebook developers are behind the development and maintenance of
            this library. And, in this case, most of Facebook’s products are
            made with React.Last but not least, Vue.js is, according to its
            site: “A progressive JavaScript framework” Vue.js is developed and
            led by Evan You, but also it counts on a huge open-source community.
            These three frameworks have several things in common, such as each
            follows a component-based architecture and allows creating UI
            features quickly. React and Vue.js are mainly declarative, and while
            Angular could also be declarative, it’s really more imperative.
            Nevertheless, they present some more differences according to their
            structure, architecture and way of working, so let’s dive into all
            these characteristics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
