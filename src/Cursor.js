import React, { useMemo } from 'react';
import { useOnlineCursor, useRenderPosition } from '@yomo/react-cursor-chat';
import CursorIcon from './cursor';

// You can customise the content of your own mouse block
const MeCursor = ({ cursor }) => {
    const refContainer = useRenderPosition(cursor);

    return useMemo(
        () => (
            <div className="cursor" ref={refContainer}>
                <CursorIcon color={cursor.color} />
                {cursor.name && <div>{cursor.name}</div>}
                {cursor.avatar && (
                    <img className="avatar" src={cursor.avatar} alt="avatar" />
                )}
            </div>
        ),
        []
    );
};

// You can customise what other people's mouse blocks can display
const OthersCursor = ({ cursor }) => {
    const refContainer = useRenderPosition(cursor);
    return (
        <div ref={refContainer} className="cursor">
            <CursorIcon color={cursor.color} />
            {cursor.name && <div>{cursor.name}</div>}
            {cursor.avatar && (
                <img className="avatar" src={cursor.avatar} alt="avatar" />
            )}
        </div >
    );
};

// Exporting your custom components
export const CursorComp = ({
    presenceURL,
    presenceAuthEndpoint,
    room,
    // name,
    avatar,
}) => {
    const { me, others } = useOnlineCursor({
        presenceURL,
        presenceAuthEndpoint,
        room,
        // name,
        avatar,
    });

    if (!me) {
        return null;
    }

    return (
        <div className="container">
            {others.map(item => (
                <OthersCursor key={item.id} cursor={item} />
            ))}
            <MeCursor cursor={me} />
        </div>
    );
};