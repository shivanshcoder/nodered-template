/**
 * exposes all custom exceptions
 */
const GeneralException = require('./GeneralException');
const NotFoundException = require('./NotFoundException');
const ConflictException = require('./ConflictException');
const ForbiddenException = require('./ForbiddenException');
const ValidationException = require('./ValidationException');
const UnauthorizedException = require('./UnauthorizedException');
const BadRequestException = require('./BadRequestException');
const PermissionDeniedException = require('./PermissionDeniedException');
const InternalServerErrorException = require('./InternalServerException');

module.exports= {
  GeneralException,
  NotFoundException,
  ConflictException,
  ForbiddenException,
  ValidationException,
  UnauthorizedException,
  BadRequestException,
  PermissionDeniedException,
  InternalServerErrorException
};
