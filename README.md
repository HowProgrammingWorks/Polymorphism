# Polymorphism

## Polymorphism classification

1. Ad-hoc polymorphism - Functions or operators behave differently based on argument types
  - Function and method overloading - Multiple functions with same name, different signatures
    - CSharp example: [`1-ad-hoc.cs`](Classification/1-ad-hoc.cs)
    - JavaScript emulation: [`2-emulation.js`](Classification/2-emulation.js)
  - Operator overloading - Custom behavior for built-in operators: [`3-operator.cpp`](Classification/3-operator.cpp)
  - Type-class polymorphism - Ad-hoc polymorphism via type constraints (e.g. Haskell type classes, Rust traits)
  - Coercion polymorphism - Implicit or explicit type conversions: [`4-coercion.js`](Classification/4-coercion.js)
2. Subtype polymorphism - Objects of derived types can be used where base types are expected
  - Class inheritance - IS-A relationship via base classes: [`5-abstract.ts`](Classification/5-abstract.ts)
  - Interface / protocol polymorphism - Contracts that types must implement: [`6-protocol.js`](Classification/6-protocol.js)
  - Structural (duck typing) polymorphism - Compatibility based on structure, not explicit inheritance: [`6-protocol.js`](Classification/6-protocol.js)
3. Parametric polymorphism - Code written generically to work with any type (examples will be added ASAP)
  - Generic functions - Functions parameterized by types
  - Generic data structures - Data structures parameterized by types
4. Dispatch mechanisms - How the runtime selects which method to call
  - Dynamic dispatch - Method chosen at runtime based on object type: [`7-dynamic.js`](Classification/7-dynamic.js)
  - Virtual functions and methods - Base class methods overridable by derived classes: [`8-virtual.cpp`](Classification/8-virtual.cpp)
  - Multiple or multimethod dispatch - Method chosen based on multiple argument types
