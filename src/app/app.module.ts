import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MyMessageComponent } from './package/my-message/my-message.component';
import { BotMessageComponent } from './package/bot-message/bot-message.component';
import { BarComponent } from './package/bar/bar.component';
import { HeaderComponent } from './package/header/header.component';
import { ApiBotService } from './service/api-bot.service';
import { FormsModule } from '@angular/forms';
import { PresentationComponent } from './package/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMessageComponent,
    BotMessageComponent,
    BarComponent,
    HeaderComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
