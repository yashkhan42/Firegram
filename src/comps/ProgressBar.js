import React from 'react';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({file, setFile, collection})  => {

    const { progress, url } = useStorage(file, collection);

    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
          initial={{ width: 0 }} 
          animate={{ width: progress + '%' }}
        >
        </motion.div>
    );
};

export default ProgressBar;