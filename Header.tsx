/* Copyright (C) 2022 Airbus. All rights reserved. */

import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Header from '../Layout/Header';

import './index.scss';

interface Props {
    emptyMessage?: string;
    otherMessage?: string;
    docTitle?: string;
    showHeader?: boolean;
}

const ErrorManagement: React.FC<Props> = ({
    emptyMessage = '',
    otherMessage = 'You are not authorized to access this page. Please contact CLES administration if you need access to this page.',
    docTitle = 'Unauthorized',
    showHeader = false,
}) => {
    useDocumentTitle(docTitle);

    return (
        <>
            {showHeader && <Header type={'error'}></Header>}
            <div className={`row justify-content-md-center access-denied-view`}>
                <div className="col-auto text-center content">
                    <div className="image"></div>
                    <div className="message pt-3">{emptyMessage}</div>
                    <div className="pt-3">{otherMessage}</div>
                </div>
            </div>
        </>
    );
};

export default ErrorManagement;
