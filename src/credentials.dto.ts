import { IsString } from 'class-validator';

export class SaveUserCredentialsDto {
  readonly id: number;
  @IsString() readonly email: string;
  @IsString() readonly password: string;
  @IsString() readonly frontendData: string;
}