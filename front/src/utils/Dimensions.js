import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

const getWidthPorc = (porc) => {
    const { width, height } = useWindowDimensions();

    var value = porc/100;

    return value*width;

};

const getHeightPorc = (porc) => {
    const { width, height } = useWindowDimensions();

    var value = porc/100;

    return value*height;

};

export default {
    getWidthPorc,
    getHeightPorc,
};