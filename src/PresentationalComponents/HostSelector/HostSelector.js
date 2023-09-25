import './_HostSelector.scss';

import { Button, InputGroup, InputGroupText, TextInput } from '@patternfly/react-core';
import { LOCALHOST, PRODUCTION_URL, CUSTOM_SERVER, setBaseUrlConstant } from '../../AppConstants';
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBaseUrl } from '../../store/Actions';
import { useHistory } from 'react-router-dom';
import RedoIcon from '@patternfly/react-icons/dist/js/icons/redo-icon';

const HostSelector = ({ baseUrl, setBaseUrl }) => {
    const [input, setInput] = useState(baseUrl);
    const history = useHistory();

    const setUrl = (url) => {
        setInput(url);
        setBaseUrl(url);
        setBaseUrlConstant(url);
        history.push(history.location.pathname);
    };

    return (
        <InputGroup id="host-selector-group">
            <InputGroupText variant='plain'>Server:</InputGroupText>
            <Button
                isActive={input === PRODUCTION_URL}
                id="select-production"
                variant="control"
                onClick={() => setUrl(PRODUCTION_URL)}
            >
        Production
            </Button>
            <Button
                isActive={input === LOCALHOST}
                id="select-localhost"
                variant="control"
                onClick={() => setUrl(LOCALHOST)}
            >
        Localhost
            </Button>
            <Button
                id="select-custom"
                variant="control"
                onClick={() => setUrl(CUSTOM_SERVER)}
            >
        Custom
            </Button>
            <TextInput
                isActive={input !== LOCALHOST && input !== PRODUCTION_URL}
                id="custom-input"
                type="url"
                aria-label="custom input field"
                value={input}
                onChange={(input) => setInput(input)}
            />
            <Button variant="primary" onClick={() => setUrl(input)}>
        Submit
            </Button>
            <Button
                variant="link"
                onClick={() => setUrl(input)}
                icon={<RedoIcon />}
                iconPosition="right"
            >
        Refresh
            </Button>
        </InputGroup>
    );
};

HostSelector.propTypes = {
    baseUrl: PropTypes.string,
    setBaseUrl: PropTypes.func
};

export default connect(({ CPStore }) => ({ baseUrl: CPStore.baseUrl }),
    dispatch => ({ setBaseUrl: url => dispatch(setBaseUrl(url)) }))(HostSelector);
