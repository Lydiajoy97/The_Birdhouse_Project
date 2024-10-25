import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/Dropdown.module.css"

// Dropdown from React bootstraps Custom toggle
// From Code Inistute moments walkthrough

const Menu = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa-solid fa-bars"
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
            <Dropdown.Toggle as={Menu} />
    
            <Dropdown.Menu  className="text-center" propperConfig={{strategy: "fixed"}}>
                <Dropdown.Item 
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit bird post"
                >
                    <i className="fas fa-edit" />
                </Dropdown.Item>
                <Dropdown.Item 
                className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label = "delete bird post"
                >
                    <i class="fa-solid fa-eraser"></i>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
  