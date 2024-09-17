import { TUser } from '../User/user.interface';
import { TFacility } from './facility.interface';
import { Facility } from './facility.model';

const getFacility = async () => {
  const result = await Facility.find();
  return result;
};
const facilityCreate = async (payload: TFacility) => {
  const result = await Facility.create(payload);
  return result;
};
const facilityDelete = async (id: string) => {
  const result = await Facility.findByIdAndDelete({ _id: id });
  return result;
};
const facilityUpdate = async (id: string, payload: TUser) => {
  const result = await Facility.findByIdAndUpdate({ _id: id }, payload);
  return result;
};

export const facilityService = {
  facilityCreate,
  facilityUpdate,
  facilityDelete,
  getFacility,
};
