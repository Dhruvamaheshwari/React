import PropTypes from "prop-types";

function Student(props) {
    const { name, age, isStudent } = props;
        return (
            <div className="Student">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Student: {isStudent ? "yes" : "No"}</p>
            </div>
        );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: true,
};


export default Student;