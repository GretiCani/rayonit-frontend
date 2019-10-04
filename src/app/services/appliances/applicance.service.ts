import { ApplianceDTO } from './../../domain/appliance-dto';
import { Appliance } from './../../domain/appliance';
import { SocketClientService } from './../websocket/socket-client.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplicanceService {

  public appliance: Subject<Appliance[]>;
  public appliances: Appliance[];

  constructor(private socketClient: SocketClientService) {}

  getAppliances(): Observable<Appliance[]>{
    return this.socketClient
      .onMessage('/topic/appliances/get')
  }

  addAppliance(appliance:ApplianceDTO){
    return this.socketClient.send(`/topic/appliances/add`,appliance);
  }


  findAppliance(applianceId):Observable<any>{
    return this.socketClient.onMessage(`topic/appliances/${applianceId}/get`)
  }

  turnOnOfAppliance(id:number){
    return this.socketClient._send(`/topic/appliances/${id}/onOf`);
  }

  increaseAttributeValue(attributeId){
    return this.socketClient.send('/topic/appliances/attribute/increase',attributeId);
  }

  decreaseAttributeValue(attributeId){
    return this.socketClient.send('/topic/appliances/attribute/decrease',attributeId);

  }

}
