import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function ProfileCreateForm() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Label>Full Name</Form.Label>
      <Form.Control 
              aria-label="Full name"
              type="text" 
              placeholder="Post title" 
              name="title"
            //   value=
            //   onChange=
            />
        <Form.Control aria-label="Last name" />
    </InputGroup>
  );
}

export default ProfileCreateForm;