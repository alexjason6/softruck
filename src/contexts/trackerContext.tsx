import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';

import SoftruckServices from '../services/softruckServices';

import {vehicleType} from '../types/vehicle';
import {coursesType} from '../types/courses';
import {positionsType} from '../types/positions';

interface TrackerContextData {
  vehicle: vehicleType | undefined;
  courses: [coursesType] | undefined;
  lastPosition: positionsType | undefined;
  getVehicleInfos: () => {};
  getLastPosition: () => {};
  getCourses: () => {};
}

const TrackerContext = createContext<TrackerContextData>(
  {} as TrackerContextData,
);

export const TrackerProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [vehicle, setVehicle] = useState();
  const [courses, setCourses] = useState();
  const [lastPosition, setLastPosition] = useState();

  const getLastPosition = async () => {
    const position = await SoftruckServices.getPosition();

    if (position.message) {
      return Alert.alert(position.message);
    }

    setLastPosition(position);
  };

  const getVehicleInfos = useCallback(async () => {
    const infos = await SoftruckServices.getInfos();

    if (infos.message) {
      return Alert.alert(infos.message);
    }

    setVehicle(infos);
    getLastPosition();
  }, []);

  const getCourses = useCallback(async () => {
    const coursesInfo = await SoftruckServices.getCourses();

    if (coursesInfo.message) {
      return Alert.alert(coursesInfo.message);
    }

    setCourses(coursesInfo);
  }, []);

  useEffect(() => {
    getVehicleInfos();
  }, [getVehicleInfos]);

  return (
    <TrackerContext.Provider
      value={{
        vehicle,
        courses,
        lastPosition,
        getVehicleInfos,
        getLastPosition,
        getCourses,
      }}>
      {children}
    </TrackerContext.Provider>
  );
};

export default TrackerContext;
