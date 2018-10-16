import {Component, EventEmitter, Input, Output, ViewRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public data: any[] = [];
  @Input() public template: ViewRef;
  @Output() public scrollBottom: EventEmitter<void> = new EventEmitter();
  private _lockEventScroll = false;

  public trackById(id: number): number {
    return id;
  }

  public scrollDown(ev: Event): void {
    const el: HTMLUListElement = ev.target as HTMLUListElement;
    const scrollBottom: number = el.scrollHeight - (el.clientHeight + el.scrollTop);
    const minValue = 60;
    if (!this._lockEventScroll && scrollBottom < minValue) {
      this._lockEventScroll = true;
      this.scrollBottom.emit();
    } else if (scrollBottom > minValue) {
      this._lockEventScroll = false;
    }
  }
}
