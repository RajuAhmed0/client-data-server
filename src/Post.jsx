import React from 'react';

const Post = () => {

    const handlePostBtn = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const roll = e.target.roll.value
        const gender = e.target.gender.value
        const age = e.target.age.value
        const data = {
            Name: name,
            Roll: roll,
            Gender: gender,
            Age: age
        }


        fetch("http://localhost:3000/studentsInfo", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
             },
             body: JSON.stringify(data)
        })
            .then(res => console.log(res)
            )
            .catch(data => {
                console.log(data)
                alert('Post Success')
    
            })
    }



    

    return (
        <div>
            <form onSubmit={handlePostBtn} style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
                <input type="text" name='name' placeholder='Name' />
                <input type="number" name='roll' placeholder='Roll' />
                <input type="text" name='gender' placeholder='Gender' />
                <input type="number" name='age' placeholder='Age' />
                <input type="submit" value={"Post"} />
            </form>
        </div>
    );
};

export default Post;