import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PackageOnUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  quantPeople: number;

  @IsOptional()
  @IsNumber()
  hotelId: number;

  @IsOptional()
  @IsNumber()
  ticketId: number;

  @IsOptional()
  @IsNumber()
  insuranceId: number;

  @IsOptional()
  @IsNumber()
  showId: number;
}
