type Props = {
    firstName: string,
    lastName: string,
    grades: number[]
}

function Student({firstName, lastName, grades}:Props){
    return(
        <div>
            <p>firstName: {firstName}</p>
            <p>lastName: {lastName}</p>
            <p>average grade: {grades.reduce(((acc, e)=> acc+e),0)/grades.length}</p>
        </div>
    );
}
export default Student;