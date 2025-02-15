import React,{useState} from 'react';
import useUserStore from '../Store.js';

export default function MarksEntry() {

    const {username}=useUserStore();
    const [sub1, setsub1] = useState("");  
    const [sub2, setsub2] = useState("");
    const [sub3, setsub3] = useState("");
    const [sub4, setsub4] = useState("");
    const [sub5, setsub5] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await fetch("http://localhost:5000/add-data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, sub1, sub2, sub3, sub4, sub5 }), // Include username
            });

            const data = await res.json();
            if (!res.ok) throw new Error("Failed to update students");
            console.log("Students updated:", data);
        } catch (err) {
            console.error("Error updating students:", err);
        }
    };


    return (
            <div>
            <h3>Welcome, {username}!</h3>
            <h3>Add Marks</h3>
            
            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 1' 
                    value={sub1} 
                    onChange={(e) => setsub1(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 2' 
                    value={sub2} 
                    onChange={(e) => setsub2(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 3' 
                    value={sub3} 
                    onChange={(e) => setsub3(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 4' 
                    value={sub4} 
                    onChange={(e) => setsub4(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 5' 
                    value={sub5} 
                    onChange={(e) => setsub5(e.target.value)}
                />
            </div>
            
            <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
    );
}
