import './_HostSelector.scss';

import { Button, InputGroup, TextInput } from '@patternfly/react-core';
import { LOCALHOST, PRODUCTION_URL, CUSTOM_SERVER, setBaseUrlConstant } from '../../AppConstants';
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBaseUrl } from '../../store/Actions';
import { useHistory } from 'react-router-dom';

const HostSelector = ({ baseUrl, setBaseUrl }) => {
    const [input, setInput] = useState(baseUrl);
    const history = useHistory();

    const setUrl = (url) => {
        setInput(url);
        setBaseUrl(url);
        setBaseUrlConstant(url);
        history.push(history.location.pathname);
    };

    return <InputGroup>
   <Button id="select-production" variant="control" onClick={() => setUrl(PRODUCTION_URL)}>Production</Button>
  <Button id="select-localhost" variant="control" onClick={() => setUrl(LOCALHOST)}>Localhost</Button>
  <Button id="select-custom" variant="control" onClick={() => setUrl(CUSTOM_SERVER)}>Custom Server</Button>

        <TextInput id="custom-input" type='url' aria-label="custom input field" value={input} onChange={(input) => setInput(input)} />
        <Button variant="primary" onClick={() => setUrl(input)}>Submit</Button>
    </InputGroup>;
};

HostSelector.propTypes = {
    baseUrl: PropTypes.string,
    setBaseUrl: PropTypes.func
};

export default connect(({ CPStore }) => ({ baseUrl: CPStore.baseUrl }),
    dispatch => ({ setBaseUrl: url => dispatch(setBaseUrl(url)) }))(HostSelector);
