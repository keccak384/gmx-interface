(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [1859],
  {
    28490: (e) => {
      e.exports = { calendar: "calendar-1NjzAl_S" };
    },
    13612: (e) => {
      e.exports = { row: "row-PABCY1cG", mobileRow: "mobileRow-PABCY1cG" };
    },
    80353: (e) => {
      e.exports = {
        dialogWrapper: "dialogWrapper-C-Wab_3K",
        dialogWrapperSmall: "dialogWrapperSmall-C-Wab_3K",
        tabs: "tabs-C-Wab_3K",
        content: "content-C-Wab_3K",
        contentMobile: "contentMobile-C-Wab_3K",
        bodyWrapper: "bodyWrapper-C-Wab_3K",
      };
    },
    32455: (e) => {
      e.exports = {
        "tablet-normal-breakpoint": "screen and (max-width: 768px)",
        "small-height-breakpoint": "screen and (max-height: 360px)",
        "tablet-small-breakpoint": "screen and (max-width: 428px)",
      };
    },
    76999: (e) => {
      e.exports = {
        calendar: "calendar-3r0qUNSu",
        popupStyle: "popupStyle-3r0qUNSu",
        header: "header-3r0qUNSu",
        title: "title-3r0qUNSu",
        switchBtn: "switchBtn-3r0qUNSu",
        prev: "prev-3r0qUNSu",
        month: "month-3r0qUNSu",
        weekdays: "weekdays-3r0qUNSu",
        weeks: "weeks-3r0qUNSu",
        week: "week-3r0qUNSu",
        day: "day-3r0qUNSu",
        disabled: "disabled-3r0qUNSu",
        selected: "selected-3r0qUNSu",
        currentDay: "currentDay-3r0qUNSu",
        isOnHighlightedEdge: "isOnHighlightedEdge-3r0qUNSu",
        withinSelectedRange: "withinSelectedRange-3r0qUNSu",
      };
    },
    8125: (e) => {
      e.exports = {
        container: "container-3tk-77P6",
        icon: "icon-3tk-77P6",
        tooltip: "tooltip-3tk-77P6",
        date: "date-3tk-77P6",
        time: "time-3tk-77P6",
      };
    },
    50051: (e) => {
      e.exports = {
        pickerInput: "pickerInput-2oRut0q-",
        icon: "icon-2oRut0q-",
        disabled: "disabled-2oRut0q-",
        picker: "picker-2oRut0q-",
        fixed: "fixed-2oRut0q-",
        absolute: "absolute-2oRut0q-",
        nativePicker: "nativePicker-2oRut0q-",
      };
    },
    42934: (e) => {
      e.exports = { tooltip: "tooltip-3y8LFwiB" };
    },
    55241: (e) => {
      e.exports = { slider: "slider-3RfwXbxu", inner: "inner-3RfwXbxu" };
    },
    34344: (e) => {
      e.exports = {
        scrollWrap: "scrollWrap-1KEqJy8_",
        tabsWrap: "tabsWrap-1KEqJy8_",
        tabs: "tabs-1KEqJy8_",
        withoutBorder: "withoutBorder-1KEqJy8_",
        tab: "tab-1KEqJy8_",
        withHover: "withHover-1KEqJy8_",
        headerBottomSeparator: "headerBottomSeparator-1KEqJy8_",
        fadeWithoutSlider: "fadeWithoutSlider-1KEqJy8_",
        withBadge: "withBadge-1KEqJy8_",
      };
    },
    66549: (e) => {
      e.exports = {
        "tablet-small-breakpoint": "screen and (max-width: 428px)",
        item: "item-2IihgTnv",
        hovered: "hovered-2IihgTnv",
        isDisabled: "isDisabled-2IihgTnv",
        isActive: "isActive-2IihgTnv",
        shortcut: "shortcut-2IihgTnv",
        toolbox: "toolbox-2IihgTnv",
        withIcon: "withIcon-2IihgTnv",
        icon: "icon-2IihgTnv",
        labelRow: "labelRow-2IihgTnv",
        label: "label-2IihgTnv",
        showOnHover: "showOnHover-2IihgTnv",
      };
    },
    16929: (e) => {
      e.exports = {
        tabs: "tabs-3I2ohC86",
        tab: "tab-3I2ohC86",
        noBorder: "noBorder-3I2ohC86",
        disabled: "disabled-3I2ohC86",
        active: "active-3I2ohC86",
        defaultCursor: "defaultCursor-3I2ohC86",
        slider: "slider-3I2ohC86",
        content: "content-3I2ohC86",
      };
    },
    74818: (e, t, n) => {
      "use strict";
      function s(e) {
        return r(e, a);
      }
      function o(e) {
        return r(e, i);
      }
      function r(e, t) {
        const n = Object.entries(e).filter(t),
          s = {};
        for (const [e, t] of n) s[e] = t;
        return s;
      }
      function a(e) {
        const [t, n] = e;
        return 0 === t.indexOf("data-") && "string" == typeof n;
      }
      function i(e) {
        return 0 === e[0].indexOf("aria-");
      }
      n.d(t, {
        filterDataProps: () => s,
        filterAriaProps: () => o,
        filterProps: () => r,
        isDataAttribute: () => a,
        isAriaAttribute: () => i,
      });
    },
    93548: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { showGoToDateDialog: () => Re });
      var s = n(67294),
        o = n(73935),
        r = n(16282),
        a = n(24287);
      function i(e) {
        return ("0" + e).slice(-2);
      }
      function l(e) {
        const t = new Date(e);
        return t.setMilliseconds(0), t.setSeconds(0), t.setMinutes(0), t.setHours(0), t;
      }
      function c(e, t = !1) {
        const n = l(e),
          s = t
            ? (function (e) {
                if (e > 6) throw new Error("Invalid day is provided");
                return 0 === e ? 6 : e - 1;
              })(n.getDay())
            : n.getDay();
        return n.setDate(n.getDate() - s), n;
      }
      function u(e) {
        const t = l(e);
        return t.setDate(1), t;
      }
      function h(e, t) {
        return Number(l(e)) === Number(l(t));
      }
      function d(e) {
        const t = new Date(e);
        return t.setDate(t.getDate() + 7), t;
      }
      function p(e, t, n) {
        const s = !t || Number(l(t)) - Number(l(e)) <= 0;
        return (!n || Number(l(n)) - Number(l(e)) >= 0) && s;
      }
      function m(e) {
        return new Date(e).getTimezoneOffset() / 60;
      }
      function v(e) {
        const t = new Date(e);
        return t.setHours(t.getHours() + m(t)), t;
      }
      function f(e) {
        const t = new Date(e);
        return t.setHours(t.getHours() - m(t)), t;
      }
      var g = n(39518),
        w = n(84540),
        D = n.n(w);
      const b = s.createContext(null);
      function _(e) {
        const { initialGoToDate: t, children: n } = e,
          [o, r] = (0, s.useState)(t),
          a =
            o.valueOf() <=
            (function (e) {
              const t = new Date(e);
              return t.setMilliseconds(999), t.setSeconds(59), t.setMinutes(59), t.setHours(23), t;
            })(new Date()).valueOf(),
          i = (0, s.useMemo)(() => ({ date: o, setDate: r, isValid: a }), [o, a]);
        return s.createElement(b.Provider, { value: i }, n);
      }
      const E = s.createContext(null);
      function C(e) {
        const { initialRanges: t, children: n } = e,
          [o, r] = (0, s.useState)(t.from),
          [a, i] = (0, s.useState)(t.to),
          l = o.valueOf() <= a.valueOf(),
          c = (0, s.useMemo)(() => ({ dateFrom: o, dateTo: a, setDateFrom: r, setDateTo: i, isValid: l }), [o, a, l]);
        return s.createElement(E.Provider, { value: c }, n);
      }
      var S = n(79881),
        y = n(94184),
        k = n.n(y),
        N = n(18437),
        x = n(64222),
        I = n.n(x),
        T = n(28164),
        M = n(72923),
        R = n(7591),
        P = n(13612);
      function O(e) {
        const { children: t } = e;
        return s.createElement("div", { className: k()(P.row, _e && P.mobileRow) }, t);
      }
      var F = n(96404),
        B = n(54041),
        A = n(49775),
        H = n(76999);
      class W extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._dateFormatter = new B.DateFormatter()),
            (this._onClick = () => {
              this.props.onClick && !this.props.isDisabled && this.props.onClick(new Date(this.props.day));
            });
        }
        render() {
          const e = y(H.day, {
            [H.selected]: this.props.isSelected,
            [H.disabled]: this.props.isDisabled,
            [H.withinSelectedRange]: this._withinSelectedRange(),
            [H.isOnHighlightedEdge]: this._isOnHighlightedEdge(),
            [H.currentDay]: this._isCurrentDay(),
          });
          return s.createElement(
            "span",
            { className: e, onClick: this._onClick, "data-day": this._dateFormatter.formatLocal(this.props.day) },
            this.props.day.getDate()
          );
        }
        _isOnHighlightedEdge() {
          const { day: e, highlightedFrom: t, highlightedTo: n } = this.props;
          return !(!t || !n) && (h(e, t) || h(e, n));
        }
        _withinSelectedRange() {
          const { day: e, highlightedFrom: t, highlightedTo: n } = this.props;
          return !(!t || !n) && this._isBetweenByDay(t, e, n);
        }
        _isCurrentDay() {
          return h(new Date(), this.props.day);
        }
        _isBetweenByDay(e, t, n) {
          const s = l(e),
            o = l(t),
            r = l(n);
          return s < o && o < r;
        }
      }
      const z = [
        (0, S.t)("Mo", { context: "day_of_week" }),
        (0, S.t)("Tu", { context: "day_of_week" }),
        (0, S.t)("We", { context: "day_of_week" }),
        (0, S.t)("Th", { context: "day_of_week" }),
        (0, S.t)("Fr", { context: "day_of_week" }),
        (0, S.t)("Sa", { context: "day_of_week" }),
        (0, S.t)("Su", { context: "day_of_week" }),
      ];
      class U extends s.PureComponent {
        constructor() {
          super(...arguments), (this._renderWeekdays = () => z.map((e) => s.createElement("span", { key: e }, e)));
        }
        render() {
          return s.createElement(
            "div",
            { className: H.month },
            s.createElement("div", { className: H.weekdays }, this._renderWeekdays()),
            s.createElement("div", { className: H.weeks }, this._renderWeeks())
          );
        }
        _renderWeeks() {
          const e = [];
          let t = c(u(this.props.viewDate), !0);
          for (let n = 0; n < 6; n++) e.push(this._renderWeek(t)), (t = new Date(d(t)));
          return e;
        }
        _renderWeek(e) {
          const t = [];
          for (let r = 0; r < 7; r++) {
            const a = new Date(e);
            a.setDate(a.getDate() + r),
              ((n = a), (o = this.props.viewDate), Number(u(n)) === Number(u(o))) &&
                t.push(
                  s.createElement(W, {
                    key: r,
                    day: a,
                    isDisabled: this._isDayDisabled(a),
                    isSelected: h(a, this.props.selectedDate),
                    onClick: this.props.onClickDay,
                    highlightedFrom: this.props.highlightedFrom,
                    highlightedTo: this.props.highlightedTo,
                  })
                );
          }
          var n, o;
          if (0 === t.length) return null;
          const r = (function (e) {
            const t = new Date(e.getFullYear(), 0, 1),
              n = (Number(e) - Number(t)) / 864e5;
            return Math.ceil((n + t.getDay() + 1) / 7);
          })(e);
          return s.createElement("div", { className: H.week, key: r }, t);
        }
        _isDayDisabled(e) {
          if (!p(e, this.props.minDate, this.props.maxDate)) return !0;
          const t = [6, 0].includes(e.getDay());
          return !!this.props.disableWeekends && t;
        }
      }
      var q = n(5186);
      const L = [
        (0, S.t)("January"),
        (0, S.t)("February"),
        (0, S.t)("March"),
        (0, S.t)("April"),
        (0, S.t)("May"),
        (0, S.t)("June"),
        (0, S.t)("July"),
        (0, S.t)("August"),
        (0, S.t)("September"),
        (0, S.t)("October"),
        (0, S.t)("November"),
        (0, S.t)("December"),
      ];
      class V extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._prevMonth = () => {
              const e = new Date(this.state.viewDate);
              e.setMonth(e.getMonth() - 1),
                this.setState({ viewDate: e }),
                this.props.onMonthSwitch && this.props.onMonthSwitch();
            }),
            (this._nextMonth = () => {
              const e = new Date(this.state.viewDate);
              e.setMonth(e.getMonth() + 1),
                this.setState({ viewDate: e }),
                this.props.onMonthSwitch && this.props.onMonthSwitch();
            }),
            (this._onClickDay = (e) => {
              this.setState({ viewDate: new Date(e) }), this.props.onSelect && this.props.onSelect(new Date(e));
            }),
            (this.state = { viewDate: e.selectedDate });
        }
        render() {
          return s.createElement(
            "div",
            { className: y(H.calendar, this.props.popupStyle && H.popupStyle, this.props.className), tabIndex: -1 },
            s.createElement(
              "div",
              { className: H.header },
              s.createElement(A.Icon, { icon: q, onClick: this._prevMonth, className: y(H.switchBtn, H.prev) }),
              s.createElement(
                "div",
                { className: H.title },
                `${L[this.state.viewDate.getMonth()]} ${this.state.viewDate.getFullYear()}`
              ),
              s.createElement(A.Icon, { icon: q, onClick: this._nextMonth, className: y(H.switchBtn, H.next) })
            ),
            s.createElement(U, {
              viewDate: this.state.viewDate,
              selectedDate: this.props.selectedDate,
              maxDate: this.props.maxDate,
              minDate: this.props.minDate,
              onClickDay: this._onClickDay,
              disableWeekends: this.props.disableWeekends,
              highlightedFrom: this.props.highlightedFrom,
              highlightedTo: this.props.highlightedTo,
            })
          );
        }
      }
      V.defaultProps = { popupStyle: !0 };
      var K = n(91943),
        G = n(16305),
        J = n(92136),
        j = n(13894),
        $ = n(4735),
        Y = n(50051);
      class X extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._input = null),
            (this._inputContainer = null),
            (this._handleFocus = () => {
              this.props.showOnFocus && this.props.onShowPicker();
            }),
            (this._handleInputRef = (e) => {
              (this._input = e), this.props.inputReference && this.props.inputReference(this._input);
            }),
            (this._handleContainerRef = (e) => {
              this._inputContainer = e;
            }),
            (this._onShowPicker = (e) => {
              if (e && this._inputContainer) {
                const t = e.getBoundingClientRect(),
                  n = this._inputContainer.getBoundingClientRect();
                t.width && t.width > window.innerWidth - n.left
                  ? ((e.style.right = "0"), (e.style.left = "auto"))
                  : ((e.style.right = "auto"), (e.style.left = n.left + "px"));
                const s = window.innerHeight - n.bottom,
                  o = n.top;
                if (s >= t.height) return void (e.style.top = n.bottom + "px");
                (e.style.top = "auto"), (e.style.bottom = o < t.height ? "0" : s + n.height + "px");
              }
            }),
            (this._onChange = () => {
              const e = (0, r.ensureNotNull)(this._input).value;
              this.setState({ value: e }), this.props.onType(e);
            }),
            (this._onKeyDown = (e) => {
              this.props.onHidePicker();
            }),
            (this._onKeyPress = (e) => {
              if (e.charCode) {
                const t = String.fromCharCode(e.charCode);
                this.props.inputRegex.test(t) || e.preventDefault();
              }
            }),
            (this._onKeyUp = (e) => {
              if (8 !== e.keyCode) {
                const e = (0, r.ensureNotNull)(this._input).value,
                  t = this.props.fixValue(e);
                t !== e && this.setState({ value: t });
              }
            }),
            (this.state = { value: e.value });
        }
        UNSAFE_componentWillReceiveProps(e) {
          e.value !== this.props.value && this.setState({ value: e.value });
        }
        render() {
          const {
            position: e = "fixed",
            className: t,
            size: n,
            disabled: o,
            readonly: r,
            errors: a,
            icon: i,
            InputComponent: l = K.FormInput,
          } = this.props;
          return s.createElement(
            "div",
            { className: Y.pickerInput, ref: this._handleContainerRef },
            s.createElement(l, {
              value: this.state.value,
              onBlur: this.props.onBlur,
              onKeyDown: this._onKeyDown,
              onKeyPress: this._onKeyPress,
              onKeyUp: this._onKeyUp,
              onChange: this._onChange,
              onFocus: this._handleFocus,
              onClick: this.props.onShowPicker,
              reference: this._handleInputRef,
              className: t,
              size: n,
              disabled: o,
              errors: a,
              messagesPosition: G.MessagesPosition.Attached,
              hasErrors: this.props.showErrorMessages && a && a.length > 0,
              name: this.props.name,
              readonly: r,
              endSlot:
                a && a.length
                  ? void 0
                  : s.createElement(
                      J.EndSlot,
                      null,
                      s.createElement(A.Icon, {
                        icon: i,
                        className: y(Y.icon, o && Y.disabled),
                        onClick: o || r ? void 0 : this.props.onShowPicker,
                      })
                    ),
              "data-name": this.props.name,
            }),
            this.props.showPicker && !r
              ? s.createElement(
                  $.Portal,
                  { top: "0", left: "0", right: "0", bottom: "0", pointerEvents: "none" },
                  s.createElement(j.OutsideEvent, { mouseDown: !0, handler: this.props.onHidePicker }, (t) =>
                    s.createElement(
                      "span",
                      { ref: t, style: { pointerEvents: "auto" } },
                      s.createElement(
                        "div",
                        { className: y(Y.picker, Y[e]), key: "0", ref: this._onShowPicker },
                        this.props.children
                      )
                    )
                  )
                )
              : null
          );
        }
      }
      X.defaultProps = { showOnFocus: !0 };
      class Q extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._input = null),
            (this._nativeInputRef = s.createRef()),
            (this._handleInputRef = (e) => {
              (this._input = e), this.props.inputReference && this.props.inputReference(this._input);
            }),
            (this._onFocus = () => {
              this.setState({ isFocused: !0 });
            }),
            (this._onBlur = () => {
              this._nativeInputRef.current && (this._nativeInputRef.current.defaultValue = this.state.value),
                this.setState({ isFocused: !1 });
            }),
            (this._onChange = (e) => {
              const { value: t } = e.target;
              t && (this.setState({ value: t }), this.props.onChange(t));
            }),
            (this.state = { value: e.value, isFocused: !1 });
        }
        componentDidMount() {
          this._nativeInputRef.current && (this._nativeInputRef.current.defaultValue = this.props.value);
        }
        render() {
          const { className: e, disabled: t, errors: n, InputComponent: o = K.FormInput } = this.props,
            r = !this.props.readonly && !t,
            a = this.props.showErrorMessages && n && n.length > 0;
          return s.createElement(
            "div",
            { className: Y.pickerInput },
            s.createElement(o, {
              value: this.state.value,
              readonly: !0,
              noReadonlyStyles: !0,
              endSlot:
                n && n.length
                  ? void 0
                  : s.createElement(
                      J.EndSlot,
                      null,
                      s.createElement(A.Icon, { icon: this.props.icon, className: y(Y.icon, t && Y.disabled) })
                    ),
              className: e,
              inputClassName: Y.textInput,
              size: this.props.size,
              disabled: t,
              hasErrors: a,
              errors: n,
              alwaysShowAttachedErrors: !0,
              messagesPosition: G.MessagesPosition.Attached,
              name: r ? void 0 : this.props.name,
              reference: this._handleInputRef,
              highlight: this.state.isFocused,
              intent: !a && this.state.isFocused ? "primary" : void 0,
            }),
            r &&
              s.createElement("input", {
                ref: this._nativeInputRef,
                type: this.props.type,
                className: Y.nativePicker,
                onChange: this._onChange,
                onInput: this._onChange,
                min: this.props.min,
                max: this.props.max,
                name: this.props.name,
                onFocus: this._onFocus,
                onBlur: this._onBlur,
              })
          );
        }
      }
      var Z = n(11888),
        ee = n(8446);
      class te extends s.PureComponent {
        constructor(e) {
          super(e),
            (this._pickerInputContainerRef = s.createRef()),
            (this._dateFormatter = new B.DateFormatter()),
            (this._fixValue = (e) => (
              (e = (e = e.substring(0, 10)).replace(/-+/g, "-")),
              (/^\d{4}$/.test(e) || /^\d{4}-\d{2}$/.test(e)) && (e += "-"),
              e
            )),
            (this._isValid = (e) => {
              if (/^[0-9]{4}(-[0-9]{2}){2}/.test(e)) {
                const t = new Date(e.concat("T00:00"));
                return (
                  !(function (e) {
                    return Number.isNaN(Number(e));
                  })(t) &&
                  (!!this.props.noRangeValidation || p(t, this.props.minDate, this.props.maxDate))
                );
              }
              return !1;
            }),
            (this._onBlur = (e) => {
              var t;
              if (
                !this.props.revertInvalidData ||
                (null === (t = this._pickerInputContainerRef.current) || void 0 === t
                  ? void 0
                  : t.contains(e.relatedTarget))
              )
                return;
              const { value: n } = e.target;
              if (!this._isValid(n)) {
                const t = new Date(this.state.date);
                this.setState({ pickerInputKey: e.timeStamp, date: t, isInvalid: !1 }), this.props.onPick(t);
              }
            }),
            (this._onType = (e) => {
              const t = this._isValid(e) ? new Date(e.concat("T00:00")) : null;
              t ? this.setState({ date: t, isInvalid: !1 }) : this.setState({ isInvalid: !0 }), this.props.onPick(t);
            }),
            (this._onSelect = (e) => {
              this.setState({ date: e, showCalendar: !1, isInvalid: !1 }), this.props.onPick(e);
            }),
            (this._showCalendar = () => {
              this.setState({ showCalendar: !0 });
            }),
            (this._hideCalendar = () => {
              this.setState({ showCalendar: !1 });
            }),
            (this._getErrors = () => {
              const e = this.props.errors ? [...this.props.errors] : [];
              return this.state.isInvalid && e.push((0, S.t)("Please enter the right date format yyyy-mm-dd")), e;
            }),
            (this.state = {
              pickerInputKey: 0,
              date: e.initial,
              showCalendar: !1,
              isInvalid: !this._isValid(this._dateFormatter.formatLocal(e.initial)),
            });
        }
        render() {
          return F.mobiletouch
            ? s.createElement(Q, {
                value: this._dateFormatter.formatLocal(this.state.date),
                type: "date",
                onChange: this._onType,
                icon: ee,
                disabled: this.props.disabled,
                size: this.props.size,
                min: this.props.minDate && this._dateFormatter.formatLocal(this.props.minDate),
                max: this.props.maxDate && this._dateFormatter.formatLocal(this.props.maxDate),
                errors: this._getErrors(),
                showErrorMessages: this.props.showErrorMessages,
                name: this.props.name,
                readonly: this.props.readonly,
                className: y(this._getFontSizeClassName(this.props.size), this.props.className),
                inputReference: this.props.inputReference,
                InputComponent: this.props.InputComponent,
              })
            : s.createElement(
                "div",
                { ref: this._pickerInputContainerRef },
                s.createElement(
                  X,
                  {
                    key: this.state.pickerInputKey,
                    value: this._dateFormatter.formatLocal(this.state.date),
                    inputRegex: /[0-9.]/,
                    fixValue: this._fixValue,
                    onType: this._onType,
                    onBlur: this._onBlur,
                    onShowPicker: this._showCalendar,
                    onHidePicker: this._hideCalendar,
                    showPicker: this.state.showCalendar && this.props.withCalendar,
                    showOnFocus: this.props.showOnFocus,
                    icon: ee,
                    disabled: this.props.disabled,
                    size: this.props.size,
                    errors: this._getErrors(),
                    showErrorMessages: this.props.showErrorMessages,
                    name: this.props.name,
                    readonly: this.props.readonly,
                    position: this.props.position,
                    className: y(this._getFontSizeClassName(this.props.size), this.props.className),
                    inputReference: this.props.inputReference,
                    InputComponent: this.props.InputComponent,
                  },
                  s.createElement(V, {
                    selectedDate: this.state.date,
                    maxDate: this.props.maxDate,
                    minDate: this.props.minDate,
                    onSelect: this._onSelect,
                  })
                )
              );
        }
        UNSAFE_componentWillReceiveProps(e) {
          this.props.initial !== e.initial && this.setState({ date: e.initial });
        }
        _getFontSizeClassName(e) {
          return e ? ("large" === e ? Z.InputClasses.FontSizeLarge : Z.InputClasses.FontSizeMedium) : void 0;
        }
      }
      te.defaultProps = { position: "fixed", withCalendar: !0 };
      var ne = n(42934);
      function se(e) {
        const { className: t, text: n } = e;
        return s.createElement("span", { className: k()(ne.tooltip, t) }, n);
      }
      var oe = n(81267);
      const re = n(8125);
      function ae(e) {
        const { hasErrors: t, onClick: n, errors: o, className: r, theme: a = re, ...i } = e;
        return s.createElement(
          "div",
          { className: a.container, onClick: n },
          s.createElement(K.FormInput, {
            ...i,
            className: a.date,
            hasErrors: t,
            errors: [],
            endSlot:
              !t &&
              s.createElement(
                J.EndSlot,
                { icon: !0, interactive: !1 },
                s.createElement(A.Icon, { icon: oe, className: a.icon })
              ),
          }),
          t && s.createElement(se, { text: (0, S.t)("Please enter the right date"), className: a.tooltip })
        );
      }
      const ie = s.createContext({ isActive: !1, isFocused: !1 });
      function le(e) {
        const { value: t, reference: n, isActive: o, onPick: r, onFocus: a } = e,
          [i, l] = (0, s.useState)(!1);
        return s.createElement(
          ie.Provider,
          { value: { isActive: o, isFocused: i } },
          s.createElement(
            "div",
            {
              onFocus: function () {
                l(!0), a && a();
              },
              onBlur: function () {
                l(!1);
              },
            },
            s.createElement(te, {
              initial: t,
              inputReference: n,
              InputComponent: ce,
              withCalendar: !1,
              onPick: function (e) {
                if (!e) return;
                r(new Date(e));
              },
              revertInvalidData: !0,
              name: e.name,
            })
          )
        );
      }
      function ce(e) {
        const { isActive: t, isFocused: n } = (0, s.useContext)(ie);
        return s.createElement(ae, { ...e, highlight: t || n });
      }
      var ue = n(39628);
      function he(e) {
        const { value: t, isDisabled: n, onPick: o } = e;
        return s.createElement(ue.TimeInput, {
          value: ((r = t), i(r.getHours()) + ":" + i(r.getMinutes())),
          onChange: o,
          disabled: n,
        });
        var r;
      }
      var de = n(28490);
      function pe(e) {
        return s.createElement(V, { ...e, className: de.calendar, popupStyle: !1 });
      }
      function me(e, t) {
        const n = new Date(t);
        return n.setFullYear(e.getFullYear()), n.setMonth(e.getMonth()), n.setDate(e.getDate()), n;
      }
      function ve(e, t) {
        const n = new Date(t);
        return n.setHours(e.getHours()), n.setMinutes(e.getMinutes()), n;
      }
      function fe(e) {
        const { dateOnly: t, onCalendarMonthSwitch: n } = e,
          { date: o, setDate: a } = (0, r.ensureNotNull)((0, s.useContext)(b)),
          i = (0, s.useRef)(null),
          l = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            _e || null === l.current || l.current.focus();
          }, []),
          s.createElement(
            "div",
            { ref: i, tabIndex: -1 },
            s.createElement(
              O,
              null,
              s.createElement(le, {
                reference: function (e) {
                  l.current = e;
                },
                value: new Date(o),
                onPick: function (e) {
                  const t = me(e, o);
                  a(t);
                },
                isActive: !_e,
              }),
              s.createElement(he, {
                value: new Date(o),
                isDisabled: t,
                onPick: function (e) {
                  var t;
                  const [n, s] = e.split(":"),
                    r = new Date();
                  r.setHours(Number(n)), r.setMinutes(Number(s));
                  const l = ve(r, o);
                  a(l), _e || null === (t = i.current) || void 0 === t || t.focus({ preventScroll: !0 });
                },
              })
            ),
            !_e &&
              s.createElement(pe, {
                key: `${o.getFullYear()}-${o.getMonth()}-${o.getDate()}`,
                selectedDate: new Date(o),
                onSelect: function (e) {
                  var t;
                  const n = me(e, o);
                  a(n), null === (t = i.current) || void 0 === t || t.focus({ preventScroll: !0 });
                },
                onMonthSwitch: n,
                maxDate: new Date(),
              })
          )
        );
      }
      function ge(e) {
        const { dateOnly: t, onCalendarMonthSwitch: n, onDateInputFocus: o } = e,
          { dateFrom: a, dateTo: i, setDateFrom: l, setDateTo: c } = (0, r.ensureNotNull)((0, s.useContext)(E)),
          [u, h] = (0, s.useState)("from"),
          d = (0, s.useRef)(null),
          p = (0, s.useRef)(null),
          m = (0, s.useRef)(null),
          v = (0, s.useMemo)(() => ("from" === u ? new Date(a) : new Date(i)), [u, i, a]);
        return (
          (0, s.useEffect)(() => {
            _e || null === p.current || p.current.focus();
          }, []),
          s.createElement(
            "div",
            { ref: d, tabIndex: -1 },
            s.createElement(
              O,
              null,
              s.createElement(le, {
                value: a,
                reference: function (e) {
                  p.current = e;
                },
                isActive: !_e && "from" === u,
                onPick: function (e) {
                  const t = me(e, a);
                  l(t);
                },
                onFocus: function () {
                  h("from"), o();
                },
                name: "start-date-range",
              }),
              s.createElement(he, {
                value: a,
                isDisabled: t,
                onPick: function (e) {
                  f(e, a, l);
                },
              })
            ),
            s.createElement(
              O,
              null,
              s.createElement(le, {
                value: i,
                reference: function (e) {
                  m.current = e;
                },
                isActive: !_e && "to" === u,
                onPick: function (e) {
                  const t = me(e, i);
                  c(t);
                },
                onFocus: function () {
                  h("to"), o();
                },
                name: "end-date-range",
              }),
              s.createElement(he, {
                value: i,
                isDisabled: t,
                onPick: function (e) {
                  f(e, i, c);
                },
              })
            ),
            !_e &&
              s.createElement(pe, {
                key: `${v.getFullYear()}-${v.getMonth()}-${v.getDate()}`,
                selectedDate: new Date(v),
                onSelect: function (e) {
                  const t = me(e, "from" === u ? a : i);
                  ({
                    from: () => {
                      var e;
                      l(t), null === (e = m.current) || void 0 === e || e.focus({ preventScroll: !0 });
                    },
                    to: () => {
                      var e;
                      c(t), null === (e = d.current) || void 0 === e || e.focus({ preventScroll: !0 });
                    },
                  }[u]());
                },
                onMonthSwitch: n,
                highlightedFrom: new Date(a),
                highlightedTo: new Date(i),
                maxDate: "from" === u ? new Date(i) : void 0,
                minDate: "to" === u ? new Date(a) : void 0,
              })
          )
        );
        function f(e, t, n) {
          var s;
          const [o, r] = e.split(":"),
            a = new Date();
          a.setHours(Number(o)), a.setMinutes(Number(r));
          n(ve(a, t)), _e || null === (s = d.current) || void 0 === s || s.focus({ preventScroll: !0 });
        }
      }
      var we = n(77658),
        De = n(68521),
        be = n(80353);
      const _e = F.mobiletouch,
        Ee = () => !0,
        Ce = {
          byId: { Date: { title: (0, S.t)("Date") }, CustomRange: { title: (0, S.t)("Custom range") } },
          allIds: ["Date", "CustomRange"],
        };
      function Se(e) {
        const { dateOnly: t, onClose: n, onGoToDate: o, onGoToRange: a } = e,
          i = (0, s.useRef)(null),
          [l, c] = (0, s.useState)(I().getValue("GoToDialog.activeTab", "Date")),
          [u, h] = (0, s.useState)(0),
          { date: d, isValid: p } = (0, r.ensureNotNull)((0, s.useContext)(b)),
          { dateFrom: m, dateTo: v, isValid: f } = (0, r.ensureNotNull)((0, s.useContext)(E));
        return (
          (0, s.useEffect)(
            () => (
              N.subscribe(T.CLOSE_POPUPS_AND_DIALOGS_COMMAND, _, null),
              () => {
                N.unsubscribe(T.CLOSE_POPUPS_AND_DIALOGS_COMMAND, _, null);
              }
            ),
            [n]
          ),
          (0, s.useEffect)(() => {
            null !== i.current && i.current();
          }, [u, l, d, m, v]),
          s.createElement(De.MatchMedia, { rule: M.DialogBreakpoints.TabletSmall }, (e) =>
            s.createElement(R.AdaptiveConfirmDialog, {
              className: k()(be.dialogWrapper, e && be.dialogWrapperSmall),
              title: (0, S.t)("Go to"),
              dataName: "go-to-date-dialog",
              render: g,
              defaultActionOnClose: "cancel",
              onClose: _,
              onClickOutside: _,
              onCancel: _,
              onSubmit: D,
              submitButtonDisabled: w(),
              submitButtonText: (0, S.t)("Go to"),
              forceCloseOnEsc: Ee,
              shouldForceFocus: !1,
              fullScreen: e,
              isOpened: !0,
            })
          )
        );
        function g({ requestResize: e }) {
          return (
            (i.current = e),
            s.createElement(
              s.Fragment,
              null,
              s.createElement(
                "div",
                { className: be.tabs },
                s.createElement(we.DialogTabs, { activeTabId: l, tabs: Ce, onSelect: C })
              ),
              s.createElement(
                "div",
                { className: k()(be.content, _e && be.contentMobile) },
                s.createElement(
                  "div",
                  { className: be.bodyWrapper },
                  s.createElement(ye, { onCalendarMonthSwitch: y, onDateInputFocus: y, activeTab: l, dateOnly: t })
                )
              )
            )
          );
        }
        function w() {
          return { CustomRange: !f, Date: !p }[l];
        }
        function D() {
          switch (l) {
            case "Date":
              o(d);
              break;
            case "CustomRange":
              a(m, v);
          }
        }
        function _() {
          n();
        }
        function C(e) {
          c(e), I().setValue("GoToDialog.activeTab", e);
        }
        function y() {
          h(u + 1);
        }
      }
      function ye(e) {
        const { activeTab: t, dateOnly: n, onCalendarMonthSwitch: o, onDateInputFocus: r } = e;
        switch (t) {
          case "Date":
            return s.createElement(fe, { dateOnly: n, onCalendarMonthSwitch: o });
          case "CustomRange":
            return s.createElement(ge, { dateOnly: n, onCalendarMonthSwitch: o, onDateInputFocus: r });
        }
      }
      function ke(e) {
        const { dateOnly: t, onClose: n, onGoToDate: o, onGoToRange: r, initialGoToDate: a, initialRanges: i } = e;
        return s.createElement(
          _,
          { initialGoToDate: a },
          s.createElement(
            C,
            { initialRanges: i },
            s.createElement(Se, { dateOnly: t, onClose: n, onGoToDate: o, onGoToRange: r })
          )
        );
      }
      var Ne = n(1467),
        xe = n(61627);
      const Ie = new (class {
        constructor() {
          this._hasError = !1;
        }
        getItemOrDefault(e, t) {
          return !sessionStorage || this._hasError ? t : sessionStorage.getItem(e);
        }
        setItem(e, t = "true") {
          try {
            sessionStorage.setItem(e, t), (this._hasError = !1);
          } catch (e) {
            this._hasError = !0;
          }
        }
      })();
      var Te = n(18820);
      const Me = new g.DialogsOpenerManager();
      function Re(e) {
        if (Me.isOpened("goTo")) return;
        if (!e.hasModel()) return;
        const t = e.model(),
          n = document.createElement("div"),
          r = s.createElement(ke, {
            onClose: i,
            dateOnly: t.model().mainSeries().isDWM(),
            initialGoToDate: Pe(),
            initialRanges: Oe(e),
            onGoToDate: (e) => {
              !(function (e, t) {
                Ie.setItem("goToDateTabLastPickedDate", String(t.valueOf()));
                if (void 0 === e.model().timeScale().tickMarks().minIndex) return;
                const n = f(t).valueOf();
                e.model()
                  .gotoTime(n)
                  .then((t) => {
                    const n = e.model().mainSeries();
                    void 0 === t ? n.clearGotoDateResult() : n.setGotoDateResult(t);
                  });
              })(t, e),
                i();
            },
            onGoToRange: (t, n) => {
              !(function (e, t, n) {
                const s = (0, Te.getTimezoneName)(e.model());
                if (!s) return;
                const o = a.linking.interval.value(),
                  r = o && (0, Ne.normalizeIntervalString)(o),
                  i = D().get_timezone(s),
                  l = (e) => (0, w.cal_to_utc)(i, new Date(e)),
                  c = f(t).valueOf(),
                  u = f(n).valueOf(),
                  h = { val: { type: "time-range", from: l(c) / 1e3, to: l(u) / 1e3 }, res: r };
                e.chartWidgetCollection().setTimeFrame(h);
              })(e, t, n),
                i();
            },
          });
        function i() {
          o.unmountComponentAtNode(n), Me.setAsClosed("goTo");
        }
        o.render(r, n), Me.setAsOpened("goTo");
      }
      function Pe() {
        const e = Ie.getItemOrDefault("goToDateTabLastPickedDate", null);
        return null === e ? l(new Date()) : new Date(Number(e));
      }
      function Oe(e) {
        const t = (function (e) {
          const t = e.model().timeScale(),
            n = t.visibleBarsStrictRange();
          if (null === n) return;
          const s = e.model().mainSeries(),
            o = s.nearestIndex(n.firstBar(), xe.PlotRowSearchMode.NearestRight),
            a = s.nearestIndex(n.lastBar(), xe.PlotRowSearchMode.NearestLeft);
          if (void 0 === o || void 0 === a) return;
          return { from: (0, r.ensureNotNull)(t.indexToUserTime(o)), to: (0, r.ensureNotNull)(t.indexToUserTime(a)) };
        })(e);
        return t ? { from: v(t.from), to: v(t.to) } : { from: v(new Date()), to: v(new Date()) };
      }
    },
    59726: (e, t, n) => {
      "use strict";
      function s(e, t, n, s, o) {
        function r(o) {
          if (e > o.timeStamp) return;
          const r = o.target;
          void 0 !== n && null !== t && null !== r && r.ownerDocument === s && (t.contains(r) || n(o));
        }
        return (
          o.click && s.addEventListener("click", r, !1),
          o.mouseDown && s.addEventListener("mousedown", r, !1),
          o.touchEnd && s.addEventListener("touchend", r, !1),
          o.touchStart && s.addEventListener("touchstart", r, !1),
          () => {
            s.removeEventListener("click", r, !1),
              s.removeEventListener("mousedown", r, !1),
              s.removeEventListener("touchend", r, !1),
              s.removeEventListener("touchstart", r, !1);
          }
        );
      }
      n.d(t, { addOutsideEventListener: () => s });
    },
    72923: (e, t, n) => {
      "use strict";
      n.d(t, { DialogBreakpoints: () => o });
      var s = n(32455);
      const o = {
        SmallHeight: s["small-height-breakpoint"],
        TabletSmall: s["tablet-small-breakpoint"],
        TabletNormal: s["tablet-normal-breakpoint"],
      };
    },
    39518: (e, t, n) => {
      "use strict";
      n.d(t, { DialogsOpenerManager: () => s, dialogsOpenerManager: () => o });
      class s {
        constructor() {
          this._storage = new Map();
        }
        setAsOpened(e, t) {
          this._storage.set(e, t);
        }
        setAsClosed(e) {
          this._storage.delete(e);
        }
        isOpened(e) {
          return this._storage.has(e);
        }
        getDialogPayload(e) {
          return this._storage.get(e);
        }
      }
      const o = new s();
    },
    77658: (e, t, n) => {
      "use strict";
      n.d(t, { DialogTabs: () => m });
      var s = n(67294),
        o = n(94184),
        r = n(41445),
        a = n(4598),
        i = n(55241);
      const l = (0, a.mergeThemes)(r.DEFAULT_SLIDER_THEME, i);
      var c = n(52444),
        u = n(96404),
        h = n(34344);
      const d = h,
        p = (0, r.factory)(function (e) {
          return s.createElement(
            "div",
            { className: l.slider, ref: e.reference },
            s.createElement("div", { className: l.inner })
          );
        });
      class m extends s.PureComponent {
        constructor() {
          super(...arguments),
            (this._createClickHandler = (e) => () => {
              this.props.onSelect(e);
            });
        }
        render() {
          const {
              theme: e = d,
              hiddenBottomBorders: t,
              fadedSlider: n = !0,
              ScrollComponent: r = c.HorizontalScroll,
            } = this.props,
            a = this._generateDialogTabs();
          return s.createElement(
            "div",
            { className: o(e.scrollWrap) },
            !t && s.createElement("div", { className: e.headerBottomSeparator }),
            s.createElement(
              r,
              {
                isVisibleFade: u.mobiletouch,
                isVisibleButtons: !u.mobiletouch,
                isVisibleScrollbar: !1,
                fadeClassName: o({ [e.fadeWithoutSlider]: !n }),
              },
              s.createElement(
                "div",
                { className: e.tabsWrap },
                s.createElement(p, { className: o(e.tabs, t && e.withoutBorder) }, a)
              )
            )
          );
        }
        _generateDialogTabs() {
          const { activeTabId: e, tabs: t, theme: n = d } = this.props;
          return t.allIds.map((a) => {
            const i = e === a,
              l = t.byId[a].withNotificationsBadge;
            return s.createElement(
              r.SliderItem,
              {
                key: a,
                value: a,
                className: o(n.tab, !i && n.withHover, l && h.withBadge),
                isActive: i,
                onClick: this._createClickHandler(a),
              },
              t.byId[a].title
            );
          });
        }
      }
    },
    95860: (e, t, n) => {
      "use strict";
      n.d(t, {
        DEFAULT_POPUP_MENU_ITEM_THEME: () => c,
        PopupMenuItem: () => d,
      });
      var s = n(67294),
        o = n(94184),
        r = n(79424),
        a = n(87438),
        i = n(74818),
        l = n(66549);
      const c = l;
      function u(e) {
        const { reference: t, ...n } = e,
          o = { ...n, ref: t };
        return s.createElement(e.href ? "a" : "div", o);
      }
      function h(e) {
        e.stopPropagation();
      }
      function d(e) {
        const {
            id: t,
            role: n,
            "aria-selected": c,
            className: d,
            title: p,
            labelRowClassName: m,
            labelClassName: v,
            shortcut: f,
            forceShowShortcuts: g,
            icon: w,
            isActive: D,
            isDisabled: b,
            isHovered: _,
            appearAsDisabled: E,
            label: C,
            link: S,
            showToolboxOnHover: y,
            target: k,
            rel: N,
            toolbox: x,
            reference: I,
            onMouseOut: T,
            onMouseOver: M,
            suppressToolboxClick: R = !0,
            theme: P = l,
          } = e,
          O = (0, i.filterDataProps)(e),
          F = (0, s.useRef)(null);
        return s.createElement(
          u,
          {
            ...O,
            id: t,
            role: n,
            "aria-selected": c,
            className: o(d, P.item, w && P.withIcon, { [P.isActive]: D, [P.isDisabled]: b || E, [P.hovered]: _ }),
            title: p,
            href: S,
            target: k,
            rel: N,
            reference: function (e) {
              (F.current = e), "function" == typeof I && I(e);
              "object" == typeof I && (I.current = e);
            },
            onClick: function (t) {
              const { dontClosePopup: n, onClick: s, onClickArg: o, trackEventObject: i } = e;
              if (b) return;
              i && (0, a.trackEvent)(i.category, i.event, i.label);
              s && s(o, t);
              n || (0, r.globalCloseMenu)();
            },
            onContextMenu: function (t) {
              const { trackEventObject: n, trackRightClick: s } = e;
              n && s && (0, a.trackEvent)(n.category, n.event, n.label + "_rightClick");
            },
            onMouseUp: function (t) {
              const { trackEventObject: n, trackMouseWheelClick: s } = e;
              if (1 === t.button && S && n) {
                let e = n.label;
                s && (e += "_mouseWheelClick"), (0, a.trackEvent)(n.category, n.event, e);
              }
            },
            onMouseOver: M,
            onMouseOut: T,
          },
          void 0 !== w && s.createElement("div", { className: P.icon, dangerouslySetInnerHTML: { __html: w } }),
          s.createElement(
            "div",
            { className: o(P.labelRow, m) },
            s.createElement("div", { className: o(P.label, v) }, C)
          ),
          (void 0 !== f || g) && s.createElement("div", { className: P.shortcut }, (B = f) && B.split("+").join(" + ")),
          void 0 !== x &&
            s.createElement("div", { onClick: R ? h : void 0, className: o(P.toolbox, { [P.showOnHover]: y }) }, x)
        );
        var B;
      }
    },
    76420: (e, t, n) => {
      "use strict";
      n.d(t, { PopupMenu: () => c });
      var s = n(67294),
        o = n(73935),
        r = n(4735),
        a = n(90901),
        i = n(94884),
        l = n(47165);
      function c(e) {
        const {
            controller: t,
            children: n,
            isOpened: c,
            closeOnClickOutside: u = !0,
            doNotCloseOn: h,
            onClickOutside: d,
            onClose: p,
            ...m
          } = e,
          v = (0, s.useContext)(i.CloseDelegateContext),
          f = (0, l.useOutsideEvent)({
            handler: function (e) {
              d && d(e);
              if (!u) return;
              if (h && e.target instanceof Node) {
                const t = o.findDOMNode(h);
                if (t instanceof Node && t.contains(e.target)) return;
              }
              p();
            },
            mouseDown: !0,
            touchStart: !0,
          });
        return c
          ? s.createElement(
              r.Portal,
              { top: "0", left: "0", right: "0", bottom: "0", pointerEvents: "none" },
              s.createElement(
                "span",
                { ref: f, style: { pointerEvents: "auto" } },
                s.createElement(
                  a.Menu,
                  {
                    ...m,
                    onClose: p,
                    onScroll: function (t) {
                      const { onScroll: n } = e;
                      n && n(t);
                    },
                    customCloseDelegate: v,
                    ref: t,
                  },
                  n
                )
              )
            )
          : null;
      }
    },
    41445: (e, t, n) => {
      "use strict";
      n.d(t, { DEFAULT_SLIDER_THEME: () => i, SliderItem: () => l, factory: () => c });
      var s = n(67294),
        o = n(94184),
        r = n(16282),
        a = n(16929);
      const i = a;
      function l(e) {
        const t = o(e.className, a.tab, {
          [a.active]: e.isActive,
          [a.disabled]: e.isDisabled,
          [a.defaultCursor]: !!e.shouldUseDefaultCursor,
          [a.noBorder]: !!e.noBorder,
        });
        return s.createElement(
          "div",
          {
            className: t,
            onClick: e.onClick,
            ref: e.reference,
            "data-type": "tab-item",
            "data-value": e.value,
            "data-name": "tab-item-" + e.value.toString().toLowerCase(),
          },
          e.children
        );
      }
      function c(e) {
        return class extends s.PureComponent {
          constructor() {
            super(...arguments), (this.activeTab = { current: null });
          }
          componentDidUpdate() {
            ((0, r.ensureNotNull)(this._slider).style.transition = "transform 350ms"), this._componentDidUpdate();
          }
          componentDidMount() {
            this._componentDidUpdate();
          }
          render() {
            const { className: t } = this.props,
              n = this._generateTabs();
            return s.createElement(
              "div",
              { className: o(t, a.tabs), "data-name": this.props["data-name"] },
              n,
              s.createElement(e, {
                reference: (e) => {
                  this._slider = e;
                },
              })
            );
          }
          _generateTabs() {
            return (
              (this.activeTab.current = null),
              s.Children.map(this.props.children, (e) => {
                const t = e,
                  n = Boolean(t.props.isActive),
                  o = {
                    reference: (e) => {
                      n && (this.activeTab.current = e), t.props.reference && t.props.reference(e);
                    },
                  };
                return s.cloneElement(t, o);
              })
            );
          }
          _componentDidUpdate() {
            const e = (0, r.ensureNotNull)(this._slider).style;
            if (this.activeTab.current) {
              const t = this.activeTab.current.offsetWidth,
                n = this.activeTab.current.offsetLeft;
              (e.transform = `translateX(${n}px)`), (e.width = t + "px"), (e.opacity = "1");
            } else e.opacity = "0";
          }
        };
      }
      c(function (e) {
        return s.createElement("div", { className: a.slider, ref: e.reference });
      });
    },
    4598: (e, t, n) => {
      "use strict";
      function s(e, t, n = {}) {
        const s = Object.assign({}, t);
        for (const o of Object.keys(t)) {
          const r = n[o] || o;
          r in e && (s[o] = [e[r], t[o]].join(" "));
        }
        return s;
      }
      function o(e, t, n = {}) {
        return Object.assign({}, e, s(e, t, n));
      }
      n.d(t, { weakComposeClasses: () => s, mergeThemes: () => o });
    },
    5186: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>';
    },
    81267: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5C6.67 7 6 7.67 6 8.5v11c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>';
    },
    8446: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M4 0c-.6 0-1 .4-1 1v1H1c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1h-2V1c0-.6-.4-1-1-1h-1c-.6 0-1 .4-1 1v1H6V1c0-.6-.4-1-1-1H4zM2 5h12v9H2V5zm5 2v2h2V7H7zm3 0v2h2V7h-2zm-6 3v2h2v-2H4zm3 0v2h2v-2H7zm3 0v2h2v-2h-2z"/></svg>';
    },
  },
]);
