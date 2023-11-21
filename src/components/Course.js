
const Header = ({name}) => {
    return(
      <h1>
        {name}
      </h1>
    )
}
  
const Part = (props) => {
    return(
      <p>
        {props.name} {props.exercises}
      </p>
    )
}
  
const Content = ({parts}) => {
    return(
      <> 
        {parts.map((part, index) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
      </>
    )
}
  
const Total = ({parts}) => {
    return(
      <p>
        Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}
      </p>
    )
}

const Course = ({course}) => {
    return(
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}
  
export default Course;