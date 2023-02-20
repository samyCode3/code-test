import { Module } from '@nestjs/common';
import { WizardworldapiModule } from './wizardworldapi/wizardworldapi.module';


@Module({
  providers: [],
  imports: [WizardworldapiModule],

})
export class AppModule {}
