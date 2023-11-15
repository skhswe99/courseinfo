const Header = (props) => {
  return(
    <h1>
      {props.course.name}
    </h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return(
    <>
      {/* {props.parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises} />)} */}
      {props.course.parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises} />)}
    </>
  )
}

const Total = (props) => {
  // const exercisesTotal = props.parts.reduce(
  //   (sum, part) => sum + part.exercises, 0
  // )
  const exercisesTotal = props.course.parts.reduce(
    (sum, part) => sum + part.exercises, 0
  )
  return(
    <p>
      Number of exercises {exercisesTotal}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
    

  return (
    <div>
      <Header course={course} />
      
      <Content course={course} />
      <Total course={course} />
    </div>
  )
  }

  export default App;