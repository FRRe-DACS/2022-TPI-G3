import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PackageDto, PackageOnUpdateDto } from '../dtos/Package.dto';
import { PackagesConstructor } from '../interceptors/PackagesConstructor.interceptor';
import { PackagesService } from '../services/Packages.service';
import { ReservedPackagesService } from '../services/ReservedPackages.service';
import { CreateQueries } from 'src/decorators/queries.decorator';

@Controller('/packages')
export class PackagesController {
  constructor(private readonly packageService: PackagesService) {}

  // @Delete('/:packageId')
  // deletePackageById(@Param('packageId') packageId: number): string {
  //   return this.packageService.deletePackageById(packageId);
  // }

  // @Post('/')
  // CreatePackage(@Body() tourismPackage: any) {
  //   return this.packageService.createPackage(tourismPackage);
  // }

  // @Post('/insurances')
  // createInsurance(@Body() insurance: any) {
  //   return this.packageService.createInsurance(insurance);
  // }
  @Get('/')
  @Public()
  getAllPackages(@CreateQueries() options: any) {
    return this.packageService.findAll(options);
  }

  @Get('/:id')
  @Public()
  getPackageById(@Param('id') id: number) {
    return this.packageService.findOne(id);
  }

  @Post('/')
  @Roles(Role.Admin)
  @UseInterceptors(PackagesConstructor)
  createPackage(@Body() tourismPackage: PackageDto) {
    return this.packageService.create(tourismPackage);
  }

  @Delete('/:packageId')
  @Roles(Role.Admin)
  deletePackageById(@Param('packageId') packageId: number) {
    return this.packageService.delete(packageId);
  }

  @Patch('/:id')
  @Roles(Role.Admin)
  @UseInterceptors(PackagesConstructor)
  updatePackage(@Body() pack: PackageOnUpdateDto, @Param('id') id: number) {
    return this.packageService.update(id, pack);
  }
}
