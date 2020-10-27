import React from "react";
import { Input } from 'antd';
import '../index.css';

const { Search } = Input;

const SearchBox = () => {
    return (
        <div className="search">
    <Search placeholder="Search Follower" enterButton />
        </div>
    );
};


export default SearchBox;