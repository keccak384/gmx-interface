(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
  [3596],
  {
    24249: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { ChartPropertyDefinitionsViewModel: () => yt });
      var r = i(16282),
        n = i(79881),
        o = i(27490),
        a = (i(23221), i(80525), i(32856)),
        s = i.n(a),
        l = i(68680),
        c = i(97806),
        h = i(49044),
        p = i(42028),
        d = i(3092),
        g = i(25019),
        y = i(10616),
        u = i(90963);
      const b = new u.TranslatedString(
          "change buy/sell buttons visibility",
          (0, n.t)("change buy/sell buttons visibility")
        ),
        v = (0, n.t)("Buy/sell buttons");
      const P = new u.TranslatedString(
          "change symbol description visibility",
          (0, n.t)("change symbol description visibility")
        ),
        f = new u.TranslatedString("change symbol legend format", (0, n.t)("change symbol legend format")),
        m = new u.TranslatedString(
          "change open market status visibility",
          (0, n.t)("change open market status visibility")
        ),
        w = new u.TranslatedString("change OHLC values visibility", (0, n.t)("change OHLC values visibility")),
        S = new u.TranslatedString("change bar change visibility", (0, n.t)("change bar change visibility")),
        D = new u.TranslatedString(
          "change indicator arguments visibility",
          (0, n.t)("change indicator arguments visibility")
        ),
        T = new u.TranslatedString(
          "change indicator titles visibility",
          (0, n.t)("change indicator titles visibility")
        ),
        _ = new u.TranslatedString(
          "change indicator values visibility",
          (0, n.t)("change indicator values visibility")
        ),
        k = new u.TranslatedString(
          "change legend background visibility",
          (0, n.t)("change legend background visibility")
        ),
        C = new u.TranslatedString(
          "change legend background transparency",
          (0, n.t)("change legend background transparency")
        ),
        L = new u.TranslatedString("change volume values visibility", (0, n.t)("change volume values visibility")),
        V = (0, n.t)("Symbol"),
        M = (0, n.t)("OHLC values"),
        x = (0, n.t)("Bar change values"),
        O = (0, n.t)("Volume"),
        z = (0, n.t)("Indicator titles"),
        G = (0, n.t)("Indicator arguments"),
        B = (0, n.t)("Indicator values"),
        H = (0, n.t)("Background"),
        A = (0, n.t)("Open market status");
      function N(e, t, i, r, n) {
        const a = [],
          c = [],
          h = (0, l.createOptionsPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(e, t.showSeriesTitle, P),
              option: (0, l.convertToDefinitionProperty)(e, i.property, f),
            },
            { id: "symbolTextSource", title: V, options: new (s())(i.values) }
          );
        if ((c.push(h), null !== r)) {
          const t = (0, l.createCheckablePropertyDefinition)(
            { checked: (0, l.convertToDefinitionProperty)(e, r, m) },
            { id: "showOpenMarketStatus", title: A }
          );
          c.push(t);
        }
        const p = (0, l.createCheckablePropertyDefinition)(
          { checked: (0, l.convertToDefinitionProperty)(e, t.showSeriesOHLC, w) },
          { id: "ohlcTitle", title: M }
        );
        c.push(p);
        const d = (0, l.createCheckablePropertyDefinition)(
          { checked: (0, l.convertToDefinitionProperty)(e, t.showBarChange, S) },
          { id: "barChange", title: x }
        );
        c.push(d),
          c.push(
            (0, l.createCheckablePropertyDefinition)(
              { checked: (0, l.convertToDefinitionProperty)(e, t.showVolume, L) },
              { id: "barVolume", title: O }
            )
          ),
          a.push((0, l.createPropertyDefinitionsGeneralGroup)(c, "seriesLegendVisibilityGroup"));
        const g = (function (e, t) {
          return null !== t && o.enabled("buy_sell_buttons")
            ? (0, l.createCheckablePropertyDefinition)(
                { checked: (0, l.convertFromWVToDefinitionProperty)(e, t.showSellBuyButtons, b) },
                { id: "tradingSellBuyPanel", title: v }
              )
            : null;
        })(e, n);
        null !== g && a.push((0, l.createPropertyDefinitionsGeneralGroup)([g], "sellBuyButtonsLegendVisibilityGroup"));
        const y = [],
          u = (0, l.createCheckablePropertyDefinition)(
            { checked: (0, l.convertToDefinitionProperty)(e, t.showStudyArguments, D) },
            { id: "studyArguments", title: G }
          ),
          N = (0, l.createCheckableSetPropertyDefinition)(
            { checked: (0, l.convertToDefinitionProperty)(e, t.showStudyTitles, T) },
            { id: "studyTitles", title: z },
            [u]
          );
        y.push(N);
        const E = (0, l.createCheckablePropertyDefinition)(
          { checked: (0, l.convertToDefinitionProperty)(e, t.showStudyValues, _) },
          { id: "studyValues", title: B }
        );
        y.push(E), a.push((0, l.createPropertyDefinitionsGeneralGroup)(y, "studiesLegendVisibilityGroup"));
        const R = [],
          j = (0, l.createTransparencyPropertyDefinition)(
            {
              checked: (0, l.convertToDefinitionProperty)(e, t.showBackground, k),
              transparency: (0, l.convertToDefinitionProperty)(e, t.backgroundTransparency, C),
            },
            { id: "legendBgTransparency", title: H }
          );
        return R.push(j), a.push((0, l.createPropertyDefinitionsGeneralGroup)(R, "generalLegendGroup")), a;
      }
      var E = i(674),
        R = i.n(E),
        j = i(84995),
        W = i(78672),
        F = i(92932),
        I = i(69881);
      const U = new u.TranslatedString("change symbol labels visibility", (0, n.t)("change symbol labels visibility")),
        q = new u.TranslatedString(
          "change symbol last value visibility",
          (0, n.t)("change symbol last value visibility")
        ),
        J = new u.TranslatedString("change symbol last value mode", (0, n.t)("change symbol last value mode")),
        K =
          (new u.TranslatedString(
            "change symbol previous close value visibility",
            (0, n.t)("change symbol previous close value visibility")
          ),
          new u.TranslatedString(
            "change disable symbol previous close value visibility",
            (0, n.t)("change disable symbol previous close value visibility")
          ),
          new u.TranslatedString(
            "change bid and ask labels visibility",
            (0, n.t)("change bid and ask labels visibility")
          ),
          new u.TranslatedString(
            "change pre/post market price label visibility",
            (0, n.t)("change pre/post market price label visibility")
          ),
          new u.TranslatedString(
            "change high and low price labels visibility",
            (0, n.t)("change high and low price labels visibility")
          )),
        Q =
          (new u.TranslatedString(
            "change indicators and financials name labels visibility",
            (0, n.t)("change indicators and financials name labels visibility")
          ),
          new u.TranslatedString(
            "change indicators name labels visibility",
            (0, n.t)("change indicators name labels visibility")
          )),
        X =
          (new u.TranslatedString(
            "change indicators and financials value labels visibility",
            (0, n.t)("change indicators and financials value labels visibility")
          ),
          new u.TranslatedString(
            "change indicators value labels visibility",
            (0, n.t)("change indicators value labels visibility")
          )),
        Y = new u.TranslatedString("change no overlapping labels", (0, n.t)("change no overlapping labels")),
        Z = new u.TranslatedString(
          "change countdown to bar close visibility",
          (0, n.t)("change countdown to bar close visibility")
        ),
        $ = new u.TranslatedString("change currency label visibility", (0, n.t)("change currency label visibility")),
        ee = new u.TranslatedString("change unit label visibility", (0, n.t)("change unit label visibility")),
        te = new u.TranslatedString("change plus button visibility", (0, n.t)("change plus button visibility")),
        ie = new u.TranslatedString("toggle lock scale", (0, n.t)("toggle lock scale")),
        re = new u.TranslatedString("change price to bar ratio", (0, n.t)("change price to bar ratio")),
        ne = new u.TranslatedString("change date format", (0, n.t)("change date format")),
        oe = (0, n.t)("Symbol name label"),
        ae = (0, n.t)("Symbol last price label"),
        se =
          ((0, n.t)("Symbol previous day close price label (intraday only)"),
          (0, n.t)("Indicators and financials name labels"),
          (0, n.t)("Indicators name labels")),
        le = ((0, n.t)("Indicators and financials value labels"), (0, n.t)("Indicators value labels")),
        ce =
          ((0, n.t)("Bid and ask labels"), (0, n.t)("Pre/post market price label"), (0, n.t)("Countdown to bar close")),
        he = (0, n.t)("Currency"),
        pe = (0, n.t)("Unit"),
        de = (0, n.t)("Plus button"),
        ge = (0, n.t)("Scales placement"),
        ye = (0, n.t)("Date format"),
        ue = (0, n.t)("Lock price to bar ratio"),
        be = (0, n.t)("No overlapping labels"),
        ve = [
          {
            value: j.PriceAxisLastValueMode.LastPriceAndPercentageValue,
            title: (0, n.t)("Price and percentage value"),
          },
          { value: j.PriceAxisLastValueMode.LastValueAccordingToScale, title: (0, n.t)("Value according to scale") },
        ];
      const Pe = new u.TranslatedString("change chart background color", (0, n.t)("change chart background color")),
        fe = new u.TranslatedString("change chart background type", (0, n.t)("change chart background type")),
        me = new u.TranslatedString("change vert grid lines color", (0, n.t)("change vert grid lines color")),
        we = new u.TranslatedString("change vert grid lines style", (0, n.t)("change vert grid lines style")),
        Se = new u.TranslatedString("change horz grid lines color", (0, n.t)("change horz grid lines color")),
        De = new u.TranslatedString("change horz grid lines style", (0, n.t)("change horz grid lines style")),
        Te = new u.TranslatedString("change intraday interval property", (0, n.t)("change intraday interval property")),
        _e = new u.TranslatedString("change sessions breaks visibility", (0, n.t)("change sessions breaks visibility")),
        ke = new u.TranslatedString("change sessions breaks color", (0, n.t)("change sessions breaks color")),
        Ce = new u.TranslatedString("change sessions breaks width", (0, n.t)("change sessions breaks width")),
        Le = new u.TranslatedString("change sessions breaks style", (0, n.t)("change sessions breaks style")),
        Ve = new u.TranslatedString("change scales text color", (0, n.t)("change scales text color")),
        Me = new u.TranslatedString("change scales font size", (0, n.t)("change scales font size")),
        xe = new u.TranslatedString("change scales lines color", (0, n.t)("change scales lines color")),
        Oe = new u.TranslatedString("change crosshair color", (0, n.t)("change crosshair color")),
        ze = new u.TranslatedString("change crosshair width", (0, n.t)("change crosshair width")),
        Ge = new u.TranslatedString("change crosshair style", (0, n.t)("change crosshair style")),
        Be = new u.TranslatedString(
          "change symbol watermark visibility",
          (0, n.t)("change symbol watermark visibility")
        ),
        He = new u.TranslatedString("change symbol watermark color", (0, n.t)("change symbol watermark color")),
        Ae = new u.TranslatedString(
          "change navigation buttons visibility",
          (0, n.t)("change navigation buttons visibility")
        ),
        Ne = new u.TranslatedString("change pane buttons visibility", (0, n.t)("change pane buttons visibility")),
        Ee = new u.TranslatedString("change top margin", (0, n.t)("change top margin")),
        Re = new u.TranslatedString("change bottom margin", (0, n.t)("change bottom margin")),
        je = new u.TranslatedString("change right margin", (0, n.t)("change right margin")),
        We = (0, n.t)("Background"),
        Fe = (0, n.t)("Vert grid lines"),
        Ie = (0, n.t)("Horz grid lines"),
        Ue = (0, n.t)("Session breaks"),
        qe = (0, n.t)("Scales text"),
        Je = (0, n.t)("Scales lines"),
        Ke = (0, n.t)("Crosshair"),
        Qe = (0, n.t)("Watermark"),
        Xe = (0, n.t)("Top margin"),
        Ye = (0, n.t)("Navigation buttons"),
        Ze = (0, n.t)("Pane buttons"),
        $e = (0, n.t)("Bottom margin"),
        et = (0, n.t)("Right margin"),
        tt = (0, n.t)("bars", { context: "unit" });
      var it = i(96284),
        rt = i(23930),
        nt = i(54041),
        ot = i(94975);
      const at = {
          symbol: i(48271),
          legend: i(24252),
          scales: i(5069),
          appearance: i(73960),
          events: i(3257),
          trading: i(26029),
        },
        st = (0, n.t)("Symbol"),
        lt = (0, n.t)("Status line"),
        ct = (0, n.t)("Scales"),
        ht = (0, n.t)("Appearance");
      (0, n.t)("Events"), (0, n.t)("Trading"), (0, n.t)("money"), (0, n.t)("pips"), (0, n.t)("ticks");
      let pt = null;
      function dt() {
        const e = new Date(Date.UTC(1997, 8, 29));
        return it.availableDateFormats.map((t) => ({ value: t, title: new nt.DateFormatter(t).format(e) }));
      }
      const gt = [
        { id: "symbol-text-source-description", value: "description", title: (0, n.t)("Description") },
        { id: "symbol-text-source-ticker", value: "ticker", title: (0, n.t)("Ticker") },
        {
          id: "symbol-text-source-ticker-and-description",
          value: "ticker-and-description",
          title: (0, n.t)("Ticker and description"),
        },
      ];
      class yt {
        constructor(e, t, i) {
          (this._propertyPages = null),
            (this._maxRightOffsetPropertyObject = null),
            (this._plPositionOptions = null),
            (this._pipValueTypeSpawn = null),
            (this._isDestroyed = !1),
            (this._undoModel = e),
            (this._model = this._undoModel.model()),
            (this._series = this._model.mainSeries()),
            (this._chartWidgetProperties = t),
            (this._options = i),
            (this._seriesPropertyDefinitionViewModel = this._createSeriesViewModel()),
            (this._legendPropertyPage = this._createLegendPropertyPage()),
            (this._scalesPropertyPage = this._createScalesPropertyPage()),
            (this._appearancePropertyPage = this._createAppearancePropertyPage()),
            (this._tradingPropertyPage = this._createTradingPropertyPage()),
            (this._eventsPropertyPage = this._createEventsPropertyPage()),
            this._series.onStyleChanged().subscribe(this, this._updateDefinitions),
            this._series.priceScaleChanged().subscribe(this, this._updateDefinitions);
        }
        destroy() {
          var e;
          null !== this._propertyPages &&
            this._propertyPages
              .filter((e, t) => 0 !== t)
              .forEach((e) => {
                (0, l.destroyDefinitions)(e.definitions.value());
              }),
            this._seriesPropertyDefinitionViewModel.destroy(),
            null === (e = this._pipValueTypeSpawn) || void 0 === e || e.destroy(),
            this._series.onStyleChanged().unsubscribe(this, this._updateDefinitions),
            this._series.priceScaleChanged().unsubscribe(this, this._updateDefinitions);
          (0, r.ensureNotNull)(this._model.timeScale()).maxRightOffsetChanged().unsubscribeAll(this),
            (this._isDestroyed = !0);
        }
        propertyPages() {
          return null === this._propertyPages
            ? this._seriesPropertyDefinitionViewModel.propertyPages().then((e) => {
                if (this._isDestroyed) throw new Error("ChartPropertyDefinitionsViewModel already destroyed");
                return (
                  null === this._propertyPages &&
                    ((this._propertyPages = [...e]),
                    this._propertyPages.push(
                      this._legendPropertyPage,
                      this._scalesPropertyPage,
                      this._appearancePropertyPage
                    ),
                    null !== this._tradingPropertyPage && this._propertyPages.push(this._tradingPropertyPage),
                    null !== this._eventsPropertyPage && this._propertyPages.push(this._eventsPropertyPage)),
                  this._propertyPages
                );
              })
            : Promise.resolve(this._propertyPages);
        }
        _updatePLPositionsDisplayOptions() {
          (0, r.ensureNotNull)(this._pipValueTypeSpawn).value();
          (0, r.ensureNotNull)(this._plPositionOptions).setValue([]);
        }
        _updateDefinitions() {
          (0, l.destroyDefinitions)(this._scalesPropertyPage.definitions.value());
          const e = this._createScalesDefinitions();
          this._scalesPropertyPage.definitions.setValue(e);
        }
        _createSeriesViewModel() {
          const e = {
            property: this._model.properties().childs().timezone,
            values: ot.availableTimezones.map((e) => ({ value: e.id, title: e.title })),
          };
          return new g.SeriesPropertyDefinitionsViewModel(this._series, this._undoModel, "symbol", st, at.symbol, e);
        }
        _createLegendPropertyPage() {
          const e = this._chartWidgetProperties.childs().paneProperties.childs().legendProperties.childs(),
            t = { property: this._series.properties().childs().statusViewStyle.childs().symbolTextSource, values: gt },
            i = N(
              this._undoModel,
              e,
              t,
              this._options.marketStatusWidgetEnabled ? y.showMarketOpenStatusProperty : null,
              pt
            );
          return (0, c.createPropertyPage)(i, "legend", lt, at.legend);
        }
        _createScalesPropertyPage() {
          const e = this._createScalesDefinitions();
          return (0, c.createPropertyPage)(e, "scales", ct, at.scales);
        }
        _createScalesDefinitions() {
          const e = this._chartWidgetProperties.childs().scalesProperties.childs(),
            t = {
              property: this._model.properties().childs().priceScaleSelectionStrategyName,
              values: (0, d.allPriceScaleSelectionStrategyInfo)().map((e) => ({ value: e.name, title: e.title })),
            },
            i = { property: rt.dateFormatProperty, values: dt() },
            r = this._model.mainSeriesScaleRatioProperty();
          return (function (e, t, i, r) {
            const n = r.seriesPriceScale.properties().childs(),
              a = [],
              c = [];
            if (r.seriesHasClosePrice) {
              const t = (0, l.createCheckablePropertyDefinition)(
                  { checked: (0, l.convertToDefinitionProperty)(e, i.showSymbolLabels, U) },
                  { id: "symbolNameLabel", title: oe }
                ),
                r = (0, l.createOptionsPropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(e, i.showSeriesLastValue, q),
                    option: (0, l.convertToDefinitionProperty)(e, i.seriesLastValueMode, J),
                  },
                  { id: "symbolLastValueLabel", title: ae, options: new (s())(ve) }
                );
              c.push(t, r);
            }
            const h = t.highLowAvgPrice.childs(),
              p = (0, I.combineProperty)((e, t) => e || t, h.highLowPriceLabelsVisible, new (R())(!1)),
              d = (0, l.createCheckablePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(
                    e,
                    p,
                    null,
                    void 0,
                    (t) => {
                      e.beginUndoMacro(K), e.setProperty(h.highLowPriceLabelsVisible, t, null), e.endUndoMacro();
                    },
                    () => p.destroy()
                  ),
                },
                { id: "highLowAverageClosePriceLabels", title: "High and low price labels" }
              );
            c.push(d);
            {
              const t = (0, l.createCheckablePropertyDefinition)(
                { checked: (0, l.convertToDefinitionProperty)(e, i.showStudyPlotLabels, Q) },
                { id: "studyNameLabel", title: se }
              );
              c.push(t);
            }
            {
              const t = (0, l.createCheckablePropertyDefinition)(
                {
                  checked: (0, l.convertToDefinitionProperty)(e, i.showStudyLastValue, X),
                },
                { id: "studyLastValueLabel", title: le }
              );
              c.push(t);
            }
            const g = (0, l.createCheckablePropertyDefinition)(
              { checked: (0, l.convertToDefinitionProperty)(e, n.alignLabels, Y) },
              { id: "noOverlappingLabels", title: be }
            );
            if ((c.push(g), r.countdownEnabled)) {
              const i = (0, l.createCheckablePropertyDefinition)(
                { checked: (0, l.convertToDefinitionProperty)(e, t.showCountdown, Z) },
                { id: "countdown", title: ce }
              );
              c.push(i);
            }
            if (r.currencyConversionEnabled) {
              const t = (0, l.createCheckablePropertyDefinition)(
                { checked: (0, l.convertToDefinitionProperty)(e, i.showCurrency, $) },
                { id: "scalesCurrency", title: he }
              );
              c.push(t);
            }
            if (r.unitConversionEnabled) {
              const t = (0, l.createCheckablePropertyDefinition)(
                { checked: (0, l.convertToDefinitionProperty)(e, i.showUnit, ee) },
                { id: "scalesUnit", title: pe }
              );
              c.push(t);
            }
            if (e.crossHairSource().isMenuEnabled()) {
              const t = (0, l.createCheckablePropertyDefinition)(
                { checked: (0, l.convertToDefinitionProperty)(e, F.addPlusButtonProperty, te) },
                { id: "addPlusButton", title: de }
              );
              c.push(t);
            }
            a.push((0, l.createPropertyDefinitionsGeneralGroup)(c, "generalScalesLabelsGroup"));
            const y = (0, l.createNumberPropertyDefinition)(
                {
                  checked: (0, l.getLockPriceScaleDefinitionProperty)(e, n.lockScale, r.seriesPriceScale, ie),
                  value: (0, l.getScaleRatioDefinitionProperty)(e, r.mainSeriesScaleRatioProperty, re, [
                    (0, W.limitedPrecision)(7),
                    (e) => e,
                  ]),
                },
                {
                  id: "lockScale",
                  title: ue,
                  min: new (s())(r.mainSeriesScaleRatioProperty.getMinValue()),
                  max: new (s())(r.mainSeriesScaleRatioProperty.getMaxValue()),
                  step: new (s())(r.mainSeriesScaleRatioProperty.getStepChangeValue()),
                }
              ),
              u = (0, l.createOptionsPropertyDefinition)(
                {
                  option: (0, l.getPriceScaleSelectionStrategyDefinitionProperty)(
                    e,
                    r.scalesPlacementPropertyObj.property
                  ),
                },
                { id: "scalesPlacement", title: ge, options: new (s())(r.scalesPlacementPropertyObj.values) }
              );
            if ((a.push(y, u), o.enabled("scales_date_format"))) {
              const t = (0, l.createOptionsPropertyDefinition)(
                { option: (0, l.convertToDefinitionProperty)(e, r.dateFormatPropertyObj.property, ne) },
                { id: "dateFormat", title: ye, options: new (s())(r.dateFormatPropertyObj.values) }
              );
              a.push(t);
            }
            return a;
          })(this._undoModel, this._series.properties().childs(), e, {
            disableSeriesPrevCloseValueProperty: this._series.isDWMProperty(),
            seriesHasClosePrice: this._series.hasClosePrice(),
            seriesPriceScale: this._series.priceScale(),
            mainSeriesScaleRatioProperty: r,
            scalesPlacementPropertyObj: t,
            dateFormatPropertyObj: i,
            currencyConversionEnabled: this._options.currencyConversionEnabled,
            unitConversionEnabled: this._options.unitConversionEnabled,
            countdownEnabled: this._options.countdownEnabled,
          });
        }
        _createMaxOffsetPropertyObject() {
          const e = (0, r.ensureNotNull)(this._model.timeScale()),
            t = new (s())(Math.floor(e.maxRightOffset()));
          e.maxRightOffsetChanged().subscribe(this, (e) => {
            t.setValue(Math.floor(e));
          }),
            (this._maxRightOffsetPropertyObject = { value: e.defaultRightOffset(), min: new (s())(0), max: t });
        }
        _createAppearancePropertyPage() {
          const e = this._chartWidgetProperties.childs(),
            t = e.paneProperties.childs(),
            i = e.scalesProperties.childs(),
            n = this._model.watermarkSource();
          let a = null;
          null !== n && (a = n.properties().childs());
          const d = { property: h.property(), values: h.availableValues() },
            g = { property: p.property(), values: p.availableValues() },
            y = this._model.sessions().properties().childs().graphics.childs().vertlines.childs().sessBreaks.childs();
          null === this._maxRightOffsetPropertyObject && this._createMaxOffsetPropertyObject();
          const u = (0, r.ensureNotNull)(this._maxRightOffsetPropertyObject),
            b = (function (e, t, i, r, n, a, c, h, p) {
              const d = [],
                g = (0, l.createColorPropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(e, t.background, null, Pe),
                    gradientColor1: (0, l.getColorDefinitionProperty)(e, t.backgroundGradientStartColor, null, Pe),
                    gradientColor2: (0, l.getColorDefinitionProperty)(e, t.backgroundGradientEndColor, null, Pe),
                    type: (0, l.convertToDefinitionProperty)(e, t.backgroundType, fe),
                  },
                  { id: "chartBackground", title: We, noAlpha: !0 }
                ),
                y = t.vertGridProperties.childs(),
                u = (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(e, y.color, null, me),
                    style: (0, l.convertToDefinitionProperty)(e, y.style, we),
                  },
                  { id: "vertGridLine", title: Fe }
                ),
                b = t.horzGridProperties.childs(),
                v = (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(e, b.color, null, Se),
                    style: (0, l.convertToDefinitionProperty)(e, b.style, De),
                  },
                  { id: "horizGridLine", title: Ie }
                ),
                P = (0, l.createLinePropertyDefinition)(
                  {
                    disabled: (0, l.convertToDefinitionProperty)(e, a, Te),
                    checked: (0, l.convertToDefinitionProperty)(e, n.visible, _e),
                    color: (0, l.getColorDefinitionProperty)(e, n.color, null, ke),
                    width: (0, l.convertToDefinitionProperty)(e, n.width, Ce),
                    style: (0, l.convertToDefinitionProperty)(e, n.style, Le),
                  },
                  { id: "sessionBeaks", title: Ue }
                ),
                f = (0, l.createTextPropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(e, r.textColor, null, Ve),
                    size: (0, l.convertToDefinitionProperty)(e, r.fontSize, Me),
                  },
                  { id: "scalesText", title: qe }
                ),
                m = (0, l.createLinePropertyDefinition)(
                  { color: (0, l.getColorDefinitionProperty)(e, r.lineColor, null, xe) },
                  { id: "scalesLine", title: Je }
                ),
                w = t.crossHairProperties.childs(),
                S = (0, l.createLinePropertyDefinition)(
                  {
                    color: (0, l.getColorDefinitionProperty)(e, w.color, w.transparency, Oe),
                    width: (0, l.convertToDefinitionProperty)(e, w.width, ze),
                    style: (0, l.convertToDefinitionProperty)(e, w.style, Ge),
                  },
                  { id: "crossHair", title: Ke }
                );
              if ((d.push(g, u, v, P, f, m, S), null !== i)) {
                const t = (0, l.createColorPropertyDefinition)(
                  {
                    checked: (0, l.convertToDefinitionProperty)(e, i.visibility, Be),
                    color: (0, l.getColorDefinitionProperty)(e, i.color, null, He),
                  },
                  { id: "watermark", title: Qe }
                );
                d.push(t);
              }
              const D = (0, l.createOptionsPropertyDefinition)(
                { option: (0, l.convertToDefinitionProperty)(e, h.property, Ae) },
                { id: "navButtons", title: Ye, options: new (s())(h.values) }
              );
              d.push(D);
              const T = (0, l.createOptionsPropertyDefinition)(
                { option: (0, l.convertToDefinitionProperty)(e, p.property, Ne) },
                { id: "paneButtons", title: Ze, options: new (s())(p.values) }
              );
              d.push(T);
              const _ = (0, l.createNumberPropertyDefinition)(
                  { value: (0, l.convertToDefinitionProperty)(e, t.topMargin, Ee, [W.floor]) },
                  {
                    type: 0,
                    id: "paneTopMargin",
                    title: Xe,
                    min: new (s())(0),
                    max: new (s())(25),
                    step: new (s())(1),
                    unit: new (s())("%"),
                  }
                ),
                k = (0, l.createNumberPropertyDefinition)(
                  { value: (0, l.convertToDefinitionProperty)(e, t.bottomMargin, Re, [W.floor]) },
                  {
                    type: 0,
                    id: "paneBottomMargin",
                    title: $e,
                    min: new (s())(0),
                    max: new (s())(25),
                    step: new (s())(1),
                    unit: new (s())("%"),
                  }
                ),
                C = (0, l.createNumberPropertyDefinition)(
                  { value: (0, l.convertFromWVToDefinitionProperty)(e, c.value, je, [W.floor]) },
                  {
                    type: 0,
                    id: "paneRightMargin",
                    title: et,
                    min: c.min,
                    max: c.max,
                    step: new (s())(1),
                    unit: new (s())(tt),
                  }
                ),
                L = [(0, l.createPropertyDefinitionsGeneralGroup)(d, "generalAppearanceGroup"), _, k];
              return o.enabled("chart_property_page_right_margin_editor") && L.push(C), L;
            })(this._undoModel, t, a, i, y, this._series.isDWMProperty(), u, d, g);
          return (0, c.createPropertyPage)(b, "appearance", ht, at.appearance);
        }
        _createTradingPropertyPage() {
          return null;
        }
        _createEventsPropertyPage() {
          return null;
        }
      }
    },
    97806: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { createPropertyPage: () => o });
      var r = i(32856),
        n = i.n(r);
      function o(e, t, i, r = null) {
        const o = { id: t, title: i, definitions: new (n())(e) };
        return null !== r && (o.icon = r), o;
      }
    },
    73960: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M7.5 16.5l-1 1v4h4l1-1m-4-4l2 2m-2-2l9-9m-5 13l-2-2m2 2l9-9m-11 7l9-9m0 0l-2-2m2 2l2 2m-4-4l.94-.94a1.5 1.5 0 0 1 2.12 0l1.88 1.88a1.5 1.5 0 0 1 0 2.12l-.94.94"/></svg>';
    },
    3257: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M10 4h1v2h6V4h1v2h2.5A2.5 2.5 0 0 1 23 8.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 5 19.5v-11A2.5 2.5 0 0 1 7.5 6H10V4zm8 3H7.5A1.5 1.5 0 0 0 6 8.5v11A1.5 1.5 0 0 0 7.5 21h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 7H18zm-3 2h-2v2h2V9zm-7 4h2v2H8v-2zm12-4h-2v2h2V9zm-7 4h2v2h-2v-2zm-3 4H8v2h2v-2zm3 0h2v2h-2v-2zm7-4h-2v2h2v-2z"/></svg>';
    },
    5069: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M10.5 20.5a2 2 0 1 1-2-2m2 2a2 2 0 0 0-2-2m2 2h14m-16-2v-14m16 16L21 17m3.5 3.5L21 24M8.5 4.5L12 8M8.5 4.5L5 8"/></svg>';
    },
    24252: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M6 13h12v1H6zM6 17h12v1H6zM6 21h12v1H6z"/><rect width="17" height="3" stroke="currentColor" rx="1.5" x="5.5" y="6.5"/></svg>';
    },
    48271: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 7H7v14h2v3h1v-3h2V7h-2V4H9v3zM8 8v12h3V8H8zm9 1h-2v10h2v3h1v-3h2V9h-2V6h-1v3zm-1 1v8h3v-8h-3z"/></svg>';
    },
    26029: (e) => {
      e.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M24.068 9a.569.569 0 0 1 .73.872L19 14.842l-5.798-4.97a.569.569 0 0 1 .73-.872l4.751 3.887.317.26.317-.26L24.068 9zm1.47-.67a1.569 1.569 0 0 0-2.103-.104L19 11.854l-4.435-3.628a1.569 1.569 0 0 0-2.014 2.405l6.124 5.249.325.279.325-.28 6.124-5.248a1.569 1.569 0 0 0 .088-2.3zm-11.484 9.728a.57.57 0 0 0 .688-.91L9 12.636l-5.742 4.512a.57.57 0 0 0 .688.91l4.76-3.462.294-.214.294.214 4.76 3.462zm1.446.649a1.57 1.57 0 0 1-2.034.16L9 15.618l-4.466 3.249a1.57 1.57 0 0 1-1.894-2.505l6.051-4.755.309-.243.309.243 6.051 4.755c.74.581.806 1.68.14 2.345z"/></svg>';
    },
  },
]);
