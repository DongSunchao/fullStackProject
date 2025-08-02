

import * as React from "react";
import { useState, useEffect } from "react";


function TestView() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5120/api/simple/user")
            .then(response => {
                if (!response.ok) {
                    throw new Error("请求失败");
                }
                return response.json();
            })
            .then(data => {
                setUser(data);
            })
            .catch(error => {
                console.error("获取用户失败:", error);
            });
    }, []);

    return (
        <div>
            <h1>admin</h1>
            {user ? (
                <div>
                    <p>姓名: {user.name}</p>
                    <p>年龄: {user.age}</p>
                </div>
            ) : (
                <p>正在加载用户信息...</p>
            )}
        </div>
    );
}

export default TestView;