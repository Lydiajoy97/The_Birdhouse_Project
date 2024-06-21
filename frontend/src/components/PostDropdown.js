import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Dropdown.module.css"

// CustomToggle from React bootstrap 
// From Code Inistute moments walkthrough

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fas fa-ellipsis-v"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const PostDropdown = ({handleEdit, handleDelete}) => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={CustomToggle} />
    
            <Dropdown.Menu  className="text-center" propperConfig={{strategy: "fixed"}}>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                >
                    <i className="fas fa-edit" />
                </Dropdown.Item>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label = "delete"
                >
                    <i className="fas fa-edit" />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
  