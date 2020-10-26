import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

const Page = () => {
    const [data, setData] = useState([]);
    const [q, setQ] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

const search = (rows) => {
return rows.filter(row => row.Name.toLowerCase().indexOf(q));
};

    const getData = async () => {
        await axios.get("https://api.github.com/users/mosh-hamedani/followers").then(
       (res) => {
           setLoading(false);
           setData(
               res.data.map(row => ({
                    Id: row.id,
                    Name: row.login,
                    Url: row.html_url,
                    Type: row.type,
                    Admin: row.site_admin
               }))
           );
       }
        );
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "Id",
            width: 100
        },
        {
            title: "Name",
            dataIndex: "Name",
            width: 100
        },
        {
            title: "Url",
            dataIndex: "Url",
            width: 100
        },
        {
            title: "Type",
            dataIndex: "Type",
            width: 100
        }
    ]

    return(
        <div>
            <div>
                <input onInput={search(data)} type="text" placeholder="search..." value={q} onChange={(e) => setQ(e.target.value)} />
            </div>

            <div>
            {loading ? (loading) : (
                <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 6}}
                scroll={{ y: 240 }}
                />
            )}
        </div>
        </div>
       
    );
};

export default Page;