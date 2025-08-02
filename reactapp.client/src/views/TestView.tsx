

import * as React from "react";
import { useState, useEffect } from "react";


function TestView() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5120/api/simple/user")
            .then(response => {
                if (!response.ok) {
                    throw new Error("����ʧ��");
                }
                return response.json();
            })
            .then(data => {
                setUser(data);
            })
            .catch(error => {
                console.error("��ȡ�û�ʧ��:", error);
            });
    }, []);

    return (
        <div>
            <h1>admin</h1>
            {user ? (
                <div>
                    <p>����: {user.name}</p>
                    <p>����: {user.age}</p>
                </div>
            ) : (
                <p>���ڼ����û���Ϣ...</p>
            )}
        </div>
    );
}

export default TestView;