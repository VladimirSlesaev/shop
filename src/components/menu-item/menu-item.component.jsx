import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl,size}) => (
    <duv style={{
        backgroundImage: `url(${imageUrl})`
    }
    }
     className={`${size} menu-item`}>
    <div className="content">
<h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>
</duv>
);
export default MenuItem;