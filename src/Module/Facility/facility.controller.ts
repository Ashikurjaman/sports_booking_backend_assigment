import { NextFunction, Request, Response } from 'express';
import { facilityService } from './faclity.service';

const getAllFacility = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = await facilityService.getFacility();

  res.status(200).json({
    success: true,
    message: 'GET Facility  successfully',
    data: result,
  });
};
const createFacility = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const facilityData = req.body;
  const result = await facilityService.facilityCreate(facilityData);

  res.status(200).json({
    success: true,
    message: 'Facility added successfully',
    data: result,
  });
};
const updateFacility = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const result = await facilityService.facilityUpdate(id, req.body);
  res.status(200).json({
    success: true,
    message: 'Facility Updated successfully',
    data: result,
  });
};
const deleteFacility = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  const result = await facilityService.facilityDelete(id);
  res.status(200).json({
    success: true,
    message: 'Facility Deleted successfully',
    data: result,
  });
};

export const facilityController = {
  createFacility,
  updateFacility,
  deleteFacility,
  getAllFacility,
};
