import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { WizardController } from './controller/wizard/wizard.controller';
import { WizardService } from './services/wizard/wizard.service';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { SpellService } from './services/spell/spell.service';
import { SpellController } from './controller/spell/spell.controller';
import { ElixrisController } from './controller/elixris/elixris.controller';
import { ElixrisService } from './services/elixris/elixris.service';

@Module({
  controllers: [WizardController, SpellController, ElixrisController],
  providers: [WizardService, SpellService, ElixrisService],
})
export class WizardworldapiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('wizard');
  }
}
