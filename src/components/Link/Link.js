import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12'><a href={route.Path}></a>{route.name}</li>
    );
};

export default Link;