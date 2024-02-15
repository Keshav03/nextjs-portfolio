import React from 'react';

export default function NameandEmail(props) {
    
    return (
        <div>
            <form action="/action_page.php">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"/>
                <label for="email">E-mail:</label>
                <input type="text" id="email" name="email"/>

                <input type="submit" value="Submit"/>
            </form>

        </div>

    )
}

