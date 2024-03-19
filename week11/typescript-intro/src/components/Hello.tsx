import React from "react";

/*
export function Hello(props) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}

export function Hello(props: { name: string }) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}
*/

type HelloProps = {
  name: string;
  age: number;
};

export function Hello(props: HelloProps) {
  return (
    <div>
      Hello {props.name} who is {props.age}
    </div>
  );
}

/*
export function Hello({ name, age }: HelloProps) {
    return (
      <div>
        Hello {name} who is {age}
      </div>
    );
  }
  */
