function noop() { }
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_data(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    const z_index = (parseInt(computed_style.zIndex) || 0) - 1;
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', `display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ` +
        `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = `data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>`;
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if ($$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set() {
        // overridden by instance, if it has props
    }
}

/* src/Item.svelte generated by Svelte v3.23.0 */

function add_css() {
	var style = element("style");
	style.id = "svelte-1ik3nfy-style";
	style.textContent = ".item.svelte-1ik3nfy{cursor:default;height:2rem;line-height:2;padding:0.2rem 0.7rem;color:var(--color, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-1ik3nfy{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-1ik3nfy{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-1ik3nfy:active{background:var(--hover)}.item.active.svelte-1ik3nfy{background:var(--hover)}.item.first.svelte-1ik3nfy{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-1ik3nfy:not(.active){background:var(--hover)}";
	append(document.head, style);
}

function create_fragment(ctx) {
	let div;
	let raw_value = /*getOptionLabel*/ ctx[0](/*item*/ ctx[1], /*filterText*/ ctx[2]) + "";
	let div_class_value;

	return {
		c() {
			div = element("div");
			attr(div, "class", div_class_value = "item " + /*itemClasses*/ ctx[3] + " svelte-1ik3nfy");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			if (dirty & /*getOptionLabel, item, filterText*/ 7 && raw_value !== (raw_value = /*getOptionLabel*/ ctx[0](/*item*/ ctx[1], /*filterText*/ ctx[2]) + "")) div.innerHTML = raw_value;
			if (dirty & /*itemClasses*/ 8 && div_class_value !== (div_class_value = "item " + /*itemClasses*/ ctx[3] + " svelte-1ik3nfy")) {
				attr(div, "class", div_class_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { isActive = false } = $$props;
	let { isFirst = false } = $$props;
	let { isHover = false } = $$props;
	let { getOptionLabel = undefined } = $$props;
	let { item = undefined } = $$props;
	let { filterText = "" } = $$props;
	let itemClasses = "";

	$$self.$set = $$props => {
		if ("isActive" in $$props) $$invalidate(4, isActive = $$props.isActive);
		if ("isFirst" in $$props) $$invalidate(5, isFirst = $$props.isFirst);
		if ("isHover" in $$props) $$invalidate(6, isHover = $$props.isHover);
		if ("getOptionLabel" in $$props) $$invalidate(0, getOptionLabel = $$props.getOptionLabel);
		if ("item" in $$props) $$invalidate(1, item = $$props.item);
		if ("filterText" in $$props) $$invalidate(2, filterText = $$props.filterText);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isActive, isFirst, isHover, item*/ 114) {
			$: {
				const classes = [];

				if (isActive) {
					classes.push("active");
				}

				if (isFirst) {
					classes.push("first");
				}

				if (isHover) {
					classes.push("hover");
				}

				if (item.isGroupHeader) {
					classes.push("groupHeader");
				}

				if (item.isGroupItem) {
					classes.push("groupItem");
				}

				$$invalidate(3, itemClasses = classes.join(" "));
			}
		}
	};

	return [getOptionLabel, item, filterText, itemClasses, isActive, isFirst, isHover];
}

class Item extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1ik3nfy-style")) add_css();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isActive: 4,
			isFirst: 5,
			isHover: 6,
			getOptionLabel: 0,
			item: 1,
			filterText: 2
		});
	}
}

/* src/VirtualList.svelte generated by Svelte v3.23.0 */

function add_css$1() {
	var style = element("style");
	style.id = "svelte-p6ehlv-style";
	style.textContent = "svelte-virtual-list-viewport.svelte-p6ehlv{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-p6ehlv,svelte-virtual-list-row.svelte-p6ehlv{display:block}svelte-virtual-list-row.svelte-p6ehlv{overflow:hidden}";
	append(document.head, style);
}

const get_default_slot_changes = dirty => ({
	item: dirty & /*visible*/ 32,
	i: dirty & /*visible*/ 32,
	hoverItemIndex: dirty & /*hoverItemIndex*/ 2
});

const get_default_slot_context = ctx => ({
	item: /*row*/ ctx[23].data,
	i: /*row*/ ctx[23].index,
	hoverItemIndex: /*hoverItemIndex*/ ctx[1]
});

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	return child_ctx;
}

// (160:57) Missing template
function fallback_block(ctx) {
	let t;

	return {
		c() {
			t = text("Missing template");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (158:2) {#each visible as row (row.index)}
function create_each_block(key_1, ctx) {
	let svelte_virtual_list_row;
	let t;
	let current;
	const default_slot_template = /*$$slots*/ ctx[19].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[18], get_default_slot_context);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);

	return {
		key: key_1,
		first: null,
		c() {
			svelte_virtual_list_row = element("svelte-virtual-list-row");
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			t = space();
			set_custom_element_data(svelte_virtual_list_row, "class", "svelte-p6ehlv");
			this.first = svelte_virtual_list_row;
		},
		m(target, anchor) {
			insert(target, svelte_virtual_list_row, anchor);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(svelte_virtual_list_row, null);
			}

			append(svelte_virtual_list_row, t);
			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, visible, hoverItemIndex*/ 262178) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[18], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(svelte_virtual_list_row);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
		}
	};
}

function create_fragment$1(ctx) {
	let svelte_virtual_list_viewport;
	let svelte_virtual_list_contents;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let svelte_virtual_list_viewport_resize_listener;
	let current;
	let mounted;
	let dispose;
	let each_value = /*visible*/ ctx[5];
	const get_key = ctx => /*row*/ ctx[23].index;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			svelte_virtual_list_viewport = element("svelte-virtual-list-viewport");
			svelte_virtual_list_contents = element("svelte-virtual-list-contents");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			set_style(svelte_virtual_list_contents, "padding-top", /*top*/ ctx[6] + "px");
			set_style(svelte_virtual_list_contents, "padding-bottom", /*bottom*/ ctx[7] + "px");
			set_custom_element_data(svelte_virtual_list_contents, "class", "svelte-p6ehlv");
			set_style(svelte_virtual_list_viewport, "height", /*height*/ ctx[0]);
			set_custom_element_data(svelte_virtual_list_viewport, "class", "svelte-p6ehlv");
			add_render_callback(() => /*svelte_virtual_list_viewport_elementresize_handler*/ ctx[22].call(svelte_virtual_list_viewport));
		},
		m(target, anchor) {
			insert(target, svelte_virtual_list_viewport, anchor);
			append(svelte_virtual_list_viewport, svelte_virtual_list_contents);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(svelte_virtual_list_contents, null);
			}

			/*svelte_virtual_list_contents_binding*/ ctx[20](svelte_virtual_list_contents);
			/*svelte_virtual_list_viewport_binding*/ ctx[21](svelte_virtual_list_viewport);
			svelte_virtual_list_viewport_resize_listener = add_resize_listener(svelte_virtual_list_viewport, /*svelte_virtual_list_viewport_elementresize_handler*/ ctx[22].bind(svelte_virtual_list_viewport));
			current = true;

			if (!mounted) {
				dispose = listen(svelte_virtual_list_viewport, "scroll", /*handle_scroll*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$$scope, visible, hoverItemIndex*/ 262178) {
				const each_value = /*visible*/ ctx[5];
				group_outros();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, svelte_virtual_list_contents, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}

			if (!current || dirty & /*top*/ 64) {
				set_style(svelte_virtual_list_contents, "padding-top", /*top*/ ctx[6] + "px");
			}

			if (!current || dirty & /*bottom*/ 128) {
				set_style(svelte_virtual_list_contents, "padding-bottom", /*bottom*/ ctx[7] + "px");
			}

			if (!current || dirty & /*height*/ 1) {
				set_style(svelte_virtual_list_viewport, "height", /*height*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(svelte_virtual_list_viewport);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			/*svelte_virtual_list_contents_binding*/ ctx[20](null);
			/*svelte_virtual_list_viewport_binding*/ ctx[21](null);
			svelte_virtual_list_viewport_resize_listener();
			mounted = false;
			dispose();
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { items = undefined } = $$props;
	let { height = "100%" } = $$props;
	let { itemHeight = 40 } = $$props;
	let { hoverItemIndex = 0 } = $$props;
	let { start = 0 } = $$props;
	let { end = 0 } = $$props;

	// local state
	let height_map = [];

	let rows;
	let viewport;
	let contents;
	let viewport_height = 0;
	let visible;
	let mounted;
	let top = 0;
	let bottom = 0;
	let average_height;

	async function refresh(items, viewport_height, itemHeight) {
		const { scrollTop } = viewport;
		await tick(); // wait until the DOM is up to date
		let content_height = top - scrollTop;
		let i = start;

		while (content_height < viewport_height && i < items.length) {
			let row = rows[i - start];

			if (!row) {
				$$invalidate(10, end = i + 1);
				await tick(); // render the newly visible row
				row = rows[i - start];
			}

			const row_height = height_map[i] = itemHeight || row.offsetHeight;
			content_height += row_height;
			i += 1;
		}

		$$invalidate(10, end = i);
		const remaining = items.length - end;
		average_height = (top + content_height) / end;
		$$invalidate(7, bottom = remaining * average_height);
		height_map.length = items.length;
		$$invalidate(2, viewport.scrollTop = 0, viewport);
	}

	async function handle_scroll() {
		const { scrollTop } = viewport;
		const old_start = start;

		for (let v = 0; v < rows.length; v += 1) {
			height_map[start + v] = itemHeight || rows[v].offsetHeight;
		}

		let i = 0;
		let y = 0;

		while (i < items.length) {
			const row_height = height_map[i] || average_height;

			if (y + row_height > scrollTop) {
				$$invalidate(9, start = i);
				$$invalidate(6, top = y);
				break;
			}

			y += row_height;
			i += 1;
		}

		while (i < items.length) {
			y += height_map[i] || average_height;
			i += 1;
			if (y > scrollTop + viewport_height) break;
		}

		$$invalidate(10, end = i);
		const remaining = items.length - end;
		average_height = y / end;
		while (i < items.length) height_map[i++] = average_height;
		$$invalidate(7, bottom = remaining * average_height);

		// prevent jumping if we scrolled up into unknown territory
		if (start < old_start) {
			await tick();
			let expected_height = 0;
			let actual_height = 0;

			for (let i = start; i < old_start; i += 1) {
				if (rows[i - start]) {
					expected_height += height_map[i];
					actual_height += itemHeight || rows[i - start].offsetHeight;
				}
			}

			const d = actual_height - expected_height;
			viewport.scrollTo(0, scrollTop + d);
		}
	} // TODO if we overestimated the space these
	// rows would occupy we may need to add some

	// more. maybe we can just call handle_scroll again?
	// trigger initial refresh
	onMount(() => {
		rows = contents.getElementsByTagName("svelte-virtual-list-row");
		$$invalidate(15, mounted = true);
	});

	let { $$slots = {}, $$scope } = $$props;

	function svelte_virtual_list_contents_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(3, contents = $$value);
		});
	}

	function svelte_virtual_list_viewport_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(2, viewport = $$value);
		});
	}

	function svelte_virtual_list_viewport_elementresize_handler() {
		viewport_height = this.offsetHeight;
		$$invalidate(4, viewport_height);
	}

	$$self.$set = $$props => {
		if ("items" in $$props) $$invalidate(11, items = $$props.items);
		if ("height" in $$props) $$invalidate(0, height = $$props.height);
		if ("itemHeight" in $$props) $$invalidate(12, itemHeight = $$props.itemHeight);
		if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
		if ("start" in $$props) $$invalidate(9, start = $$props.start);
		if ("end" in $$props) $$invalidate(10, end = $$props.end);
		if ("$$scope" in $$props) $$invalidate(18, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*items, start, end*/ 3584) {
			$: $$invalidate(5, visible = items.slice(start, end).map((data, i) => {
				return { index: i + start, data };
			}));
		}

		if ($$self.$$.dirty & /*mounted, items, viewport_height, itemHeight*/ 38928) {
			// whenever `items` changes, invalidate the current heightmap
			$: if (mounted) refresh(items, viewport_height, itemHeight);
		}
	};

	return [
		height,
		hoverItemIndex,
		viewport,
		contents,
		viewport_height,
		visible,
		top,
		bottom,
		handle_scroll,
		start,
		end,
		items,
		itemHeight,
		height_map,
		rows,
		mounted,
		average_height,
		refresh,
		$$scope,
		$$slots,
		svelte_virtual_list_contents_binding,
		svelte_virtual_list_viewport_binding,
		svelte_virtual_list_viewport_elementresize_handler
	];
}

class VirtualList extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-p6ehlv-style")) add_css$1();

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			items: 11,
			height: 0,
			itemHeight: 12,
			hoverItemIndex: 1,
			start: 9,
			end: 10
		});
	}
}

/* src/List.svelte generated by Svelte v3.23.0 */

function add_css$2() {
	var style = element("style");
	style.id = "svelte-1dsxvxg-style";
	style.textContent = ".listContainer.svelte-1dsxvxg{border-radius:var(--border-radius);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--background)}.virtualList.svelte-1dsxvxg{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1dsxvxg{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1dsxvxg{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848F)}";
	append(document.head, style);
}

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[34] = list[i];
	child_ctx[36] = i;
	return child_ctx;
}

// (210:0) {#if isVirtualList}
function create_if_block_3(ctx) {
	let div;
	let current;

	const virtuallist = new VirtualList({
			props: {
				items: /*items*/ ctx[4],
				itemHeight: /*itemHeight*/ ctx[7],
				$$slots: {
					default: [
						create_default_slot,
						({ item, i }) => ({ 34: item, 36: i }),
						({ item, i }) => [0, (item ? 8 : 0) | (i ? 32 : 0)]
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			div = element("div");
			create_component(virtuallist.$$.fragment);
			attr(div, "class", "listContainer virtualList svelte-1dsxvxg");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(virtuallist, div, null);
			/*div_binding*/ ctx[30](div);
			current = true;
		},
		p(ctx, dirty) {
			const virtuallist_changes = {};
			if (dirty[0] & /*items*/ 16) virtuallist_changes.items = /*items*/ ctx[4];
			if (dirty[0] & /*itemHeight*/ 128) virtuallist_changes.itemHeight = /*itemHeight*/ ctx[7];

			if (dirty[0] & /*Item, filterText, getOptionLabel, selectedValue, optionIdentifier, hoverItemIndex, items*/ 4918 | dirty[1] & /*$$scope, item, i*/ 104) {
				virtuallist_changes.$$scope = { dirty, ctx };
			}

			virtuallist.$set(virtuallist_changes);
		},
		i(local) {
			if (current) return;
			transition_in(virtuallist.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(virtuallist.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(virtuallist);
			/*div_binding*/ ctx[30](null);
		}
	};
}

// (213:2) <VirtualList {items} {itemHeight} let:item let:i>
function create_default_slot(ctx) {
	let div;
	let current;
	let mounted;
	let dispose;
	var switch_value = /*Item*/ ctx[2];

	function switch_props(ctx) {
		return {
			props: {
				item: /*item*/ ctx[34],
				filterText: /*filterText*/ ctx[12],
				getOptionLabel: /*getOptionLabel*/ ctx[5],
				isFirst: isItemFirst(/*i*/ ctx[36]),
				isActive: isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]),
				isHover: isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4])
			}
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	function mouseover_handler(...args) {
		return /*mouseover_handler*/ ctx[28](/*i*/ ctx[36], ...args);
	}

	function click_handler(...args) {
		return /*click_handler*/ ctx[29](/*item*/ ctx[34], /*i*/ ctx[36], ...args);
	}

	return {
		c() {
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			attr(div, "class", "listItem");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "mouseover", mouseover_handler),
					listen(div, "click", click_handler)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const switch_instance_changes = {};
			if (dirty[1] & /*item*/ 8) switch_instance_changes.item = /*item*/ ctx[34];
			if (dirty[0] & /*filterText*/ 4096) switch_instance_changes.filterText = /*filterText*/ ctx[12];
			if (dirty[0] & /*getOptionLabel*/ 32) switch_instance_changes.getOptionLabel = /*getOptionLabel*/ ctx[5];
			if (dirty[1] & /*i*/ 32) switch_instance_changes.isFirst = isItemFirst(/*i*/ ctx[36]);
			if (dirty[0] & /*selectedValue, optionIdentifier*/ 768 | dirty[1] & /*item*/ 8) switch_instance_changes.isActive = isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]);
			if (dirty[0] & /*hoverItemIndex, items*/ 18 | dirty[1] & /*item, i*/ 40) switch_instance_changes.isHover = isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4]);

			if (switch_value !== (switch_value = /*Item*/ ctx[2])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (switch_instance) destroy_component(switch_instance);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (232:0) {#if !isVirtualList}
function create_if_block(ctx) {
	let div;
	let current;
	let each_value = /*items*/ ctx[4];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	let each_1_else = null;

	if (!each_value.length) {
		each_1_else = create_else_block_1(ctx);
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			if (each_1_else) {
				each_1_else.c();
			}

			attr(div, "class", "listContainer svelte-1dsxvxg");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			if (each_1_else) {
				each_1_else.m(div, null);
			}

			/*div_binding_1*/ ctx[33](div);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty[0] & /*getGroupHeaderLabel, items, handleHover, handleClick, Item, filterText, getOptionLabel, selectedValue, optionIdentifier, hoverItemIndex, noOptionsMessage, hideEmptyState*/ 32630) {
				each_value = /*items*/ ctx[4];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();

				if (!each_value.length && each_1_else) {
					each_1_else.p(ctx, dirty);
				} else if (!each_value.length) {
					each_1_else = create_else_block_1(ctx);
					each_1_else.c();
					each_1_else.m(div, null);
				} else if (each_1_else) {
					each_1_else.d(1);
					each_1_else = null;
				}
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
			if (each_1_else) each_1_else.d();
			/*div_binding_1*/ ctx[33](null);
		}
	};
}

// (254:2) {:else}
function create_else_block_1(ctx) {
	let if_block_anchor;
	let if_block = !/*hideEmptyState*/ ctx[10] && create_if_block_2(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (!/*hideEmptyState*/ ctx[10]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (255:4) {#if !hideEmptyState}
function create_if_block_2(ctx) {
	let div;
	let t;

	return {
		c() {
			div = element("div");
			t = text(/*noOptionsMessage*/ ctx[11]);
			attr(div, "class", "empty svelte-1dsxvxg");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*noOptionsMessage*/ 2048) set_data(t, /*noOptionsMessage*/ ctx[11]);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (237:4) { :else }
function create_else_block(ctx) {
	let div;
	let t;
	let current;
	let mounted;
	let dispose;
	var switch_value = /*Item*/ ctx[2];

	function switch_props(ctx) {
		return {
			props: {
				item: /*item*/ ctx[34],
				filterText: /*filterText*/ ctx[12],
				getOptionLabel: /*getOptionLabel*/ ctx[5],
				isFirst: isItemFirst(/*i*/ ctx[36]),
				isActive: isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]),
				isHover: isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4])
			}
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	function mouseover_handler_1(...args) {
		return /*mouseover_handler_1*/ ctx[31](/*i*/ ctx[36], ...args);
	}

	function click_handler_1(...args) {
		return /*click_handler_1*/ ctx[32](/*item*/ ctx[34], /*i*/ ctx[36], ...args);
	}

	return {
		c() {
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t = space();
			attr(div, "class", "listItem");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			append(div, t);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "mouseover", mouseover_handler_1),
					listen(div, "click", click_handler_1)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const switch_instance_changes = {};
			if (dirty[0] & /*items*/ 16) switch_instance_changes.item = /*item*/ ctx[34];
			if (dirty[0] & /*filterText*/ 4096) switch_instance_changes.filterText = /*filterText*/ ctx[12];
			if (dirty[0] & /*getOptionLabel*/ 32) switch_instance_changes.getOptionLabel = /*getOptionLabel*/ ctx[5];
			if (dirty[0] & /*items, selectedValue, optionIdentifier*/ 784) switch_instance_changes.isActive = isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]);
			if (dirty[0] & /*hoverItemIndex, items*/ 18) switch_instance_changes.isHover = isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4]);

			if (switch_value !== (switch_value = /*Item*/ ctx[2])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, t);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (switch_instance) destroy_component(switch_instance);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (235:4) {#if item.isGroupHeader && !item.isSelectable}
function create_if_block_1(ctx) {
	let div;
	let t_value = /*getGroupHeaderLabel*/ ctx[6](/*item*/ ctx[34]) + "";
	let t;

	return {
		c() {
			div = element("div");
			t = text(t_value);
			attr(div, "class", "listGroupTitle svelte-1dsxvxg");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*getGroupHeaderLabel, items*/ 80 && t_value !== (t_value = /*getGroupHeaderLabel*/ ctx[6](/*item*/ ctx[34]) + "")) set_data(t, t_value);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (234:2) {#each items as item, i}
function create_each_block$1(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*item*/ ctx[34].isGroupHeader && !/*item*/ ctx[34].isSelectable) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, [-1]);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment$2(ctx) {
	let t;
	let if_block1_anchor;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*isVirtualList*/ ctx[3] && create_if_block_3(ctx);
	let if_block1 = !/*isVirtualList*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert(target, if_block1_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = listen(window, "keydown", /*handleKeyDown*/ ctx[15]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*isVirtualList*/ ctx[3]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*isVirtualList*/ 8) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (!/*isVirtualList*/ ctx[3]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*isVirtualList*/ 8) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach(if_block1_anchor);
			mounted = false;
			dispose();
		}
	};
}

function isItemActive(item, selectedValue, optionIdentifier) {
	return selectedValue && selectedValue[optionIdentifier] === item[optionIdentifier];
}

function isItemFirst(itemIndex) {
	return itemIndex === 0;
}

function isItemHover(hoverItemIndex, item, itemIndex, items) {
	return hoverItemIndex === itemIndex || items.length === 1;
}

function instance$2($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let { container = undefined } = $$props;
	let { Item: Item$$1 = Item } = $$props;
	let { isVirtualList = false } = $$props;
	let { items = [] } = $$props;

	let { getOptionLabel = (option, filterText) => {
		if (option) return option.isCreator
		? `Create \"${filterText}\"`
		: option.label;
	} } = $$props;

	let { getGroupHeaderLabel = option => {
		return option.label;
	} } = $$props;

	let { itemHeight = 40 } = $$props;
	let { hoverItemIndex = 0 } = $$props;
	let { selectedValue = undefined } = $$props;
	let { optionIdentifier = "value" } = $$props;
	let { hideEmptyState = false } = $$props;
	let { noOptionsMessage = "No options" } = $$props;
	let { isMulti = false } = $$props;
	let { activeItemIndex = 0 } = $$props;
	let { filterText = "" } = $$props;
	let isScrollingTimer = 0;
	let isScrolling = false;
	let prev_items;
	let prev_activeItemIndex;
	let prev_selectedValue;

	onMount(() => {
		if (items.length > 0 && !isMulti && selectedValue) {
			const _hoverItemIndex = items.findIndex(item => item[optionIdentifier] === selectedValue[optionIdentifier]);

			if (_hoverItemIndex) {
				$$invalidate(1, hoverItemIndex = _hoverItemIndex);
			}
		}

		scrollToActiveItem("active");

		container.addEventListener(
			"scroll",
			() => {
				clearTimeout(isScrollingTimer);

				isScrollingTimer = setTimeout(
					() => {
						isScrolling = false;
					},
					100
				);
			},
			false
		);
	});

	onDestroy(() => {
		
	}); // clearTimeout(isScrollingTimer);

	beforeUpdate(() => {
		if (items !== prev_items && items.length > 0) {
			$$invalidate(1, hoverItemIndex = 0);
		}

		// if (prev_activeItemIndex && activeItemIndex > -1) {
		//   hoverItemIndex = activeItemIndex;
		//   scrollToActiveItem('active');
		// }
		// if (prev_selectedValue && selectedValue) {
		//   scrollToActiveItem('active');
		//   if (items && !isMulti) {
		//     const hoverItemIndex = items.findIndex((item) => item[optionIdentifier] === selectedValue[optionIdentifier]);
		//     if (hoverItemIndex) {
		//       hoverItemIndex = hoverItemIndex;
		//     }
		//   }
		// }
		prev_items = items;

		prev_activeItemIndex = activeItemIndex;
		prev_selectedValue = selectedValue;
	});

	function handleSelect(item) {
		if (item.isCreator) return;
		dispatch("itemSelected", item);
	}

	function handleHover(i) {
		if (isScrolling) return;
		$$invalidate(1, hoverItemIndex = i);
	}

	function handleClick(args) {
		const { item, i, event } = args;
		event.stopPropagation();
		if (selectedValue && !isMulti && selectedValue[optionIdentifier] === item[optionIdentifier]) return closeList();

		if (item.isCreator) {
			dispatch("itemCreated", filterText);
		} else {
			$$invalidate(16, activeItemIndex = i);
			$$invalidate(1, hoverItemIndex = i);
			handleSelect(item);
		}
	}

	function closeList() {
		dispatch("closeList");
	}

	async function updateHoverItem(increment) {
		if (isVirtualList) return;
		let isNonSelectableItem = true;

		while (isNonSelectableItem) {
			if (increment > 0 && hoverItemIndex === items.length - 1) {
				$$invalidate(1, hoverItemIndex = 0);
			} else if (increment < 0 && hoverItemIndex === 0) {
				$$invalidate(1, hoverItemIndex = items.length - 1);
			} else {
				$$invalidate(1, hoverItemIndex = hoverItemIndex + increment);
			}

			isNonSelectableItem = items[hoverItemIndex].isGroupHeader && !items[hoverItemIndex].isSelectable;
		}

		await tick();
		scrollToActiveItem("hover");
	}

	function handleKeyDown(e) {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				items.length && updateHoverItem(1);
				break;
			case "ArrowUp":
				e.preventDefault();
				items.length && updateHoverItem(-1);
				break;
			case "Enter":
				e.preventDefault();
				if (items.length === 0) break;
				const hoverItem = items[hoverItemIndex];
				if (selectedValue && !isMulti && selectedValue[optionIdentifier] === hoverItem[optionIdentifier]) {
					closeList();
					break;
				}
				if (hoverItem.isCreator) {
					dispatch("itemCreated", filterText);
				} else {
					$$invalidate(16, activeItemIndex = hoverItemIndex);
					handleSelect(items[hoverItemIndex]);
				}
				break;
			case "Tab":
				e.preventDefault();
				if (items.length === 0) break;
				if (selectedValue && selectedValue[optionIdentifier] === items[hoverItemIndex][optionIdentifier]) return closeList();
				$$invalidate(16, activeItemIndex = hoverItemIndex);
				handleSelect(items[hoverItemIndex]);
				break;
		}
	}

	function scrollToActiveItem(className) {
		if (isVirtualList || !container) return;
		let offsetBounding;
		const focusedElemBounding = container.querySelector(`.listItem .${className}`);

		if (focusedElemBounding) {
			offsetBounding = container.getBoundingClientRect().bottom - focusedElemBounding.getBoundingClientRect().bottom;
		}

		$$invalidate(0, container.scrollTop -= offsetBounding, container);
	}

	
	
	const mouseover_handler = i => handleHover(i);
	const click_handler = (item, i, event) => handleClick({ item, i, event });

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, container = $$value);
		});
	}

	const mouseover_handler_1 = i => handleHover(i);
	const click_handler_1 = (item, i, event) => handleClick({ item, i, event });

	function div_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("container" in $$props) $$invalidate(0, container = $$props.container);
		if ("Item" in $$props) $$invalidate(2, Item$$1 = $$props.Item);
		if ("isVirtualList" in $$props) $$invalidate(3, isVirtualList = $$props.isVirtualList);
		if ("items" in $$props) $$invalidate(4, items = $$props.items);
		if ("getOptionLabel" in $$props) $$invalidate(5, getOptionLabel = $$props.getOptionLabel);
		if ("getGroupHeaderLabel" in $$props) $$invalidate(6, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
		if ("itemHeight" in $$props) $$invalidate(7, itemHeight = $$props.itemHeight);
		if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
		if ("selectedValue" in $$props) $$invalidate(8, selectedValue = $$props.selectedValue);
		if ("optionIdentifier" in $$props) $$invalidate(9, optionIdentifier = $$props.optionIdentifier);
		if ("hideEmptyState" in $$props) $$invalidate(10, hideEmptyState = $$props.hideEmptyState);
		if ("noOptionsMessage" in $$props) $$invalidate(11, noOptionsMessage = $$props.noOptionsMessage);
		if ("isMulti" in $$props) $$invalidate(17, isMulti = $$props.isMulti);
		if ("activeItemIndex" in $$props) $$invalidate(16, activeItemIndex = $$props.activeItemIndex);
		if ("filterText" in $$props) $$invalidate(12, filterText = $$props.filterText);
	};

	return [
		container,
		hoverItemIndex,
		Item$$1,
		isVirtualList,
		items,
		getOptionLabel,
		getGroupHeaderLabel,
		itemHeight,
		selectedValue,
		optionIdentifier,
		hideEmptyState,
		noOptionsMessage,
		filterText,
		handleHover,
		handleClick,
		handleKeyDown,
		activeItemIndex,
		isMulti,
		isScrollingTimer,
		isScrolling,
		prev_items,
		prev_activeItemIndex,
		prev_selectedValue,
		dispatch,
		handleSelect,
		closeList,
		updateHoverItem,
		scrollToActiveItem,
		mouseover_handler,
		click_handler,
		div_binding,
		mouseover_handler_1,
		click_handler_1,
		div_binding_1
	];
}

class List extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1dsxvxg-style")) add_css$2();

		init(
			this,
			options,
			instance$2,
			create_fragment$2,
			safe_not_equal,
			{
				container: 0,
				Item: 2,
				isVirtualList: 3,
				items: 4,
				getOptionLabel: 5,
				getGroupHeaderLabel: 6,
				itemHeight: 7,
				hoverItemIndex: 1,
				selectedValue: 8,
				optionIdentifier: 9,
				hideEmptyState: 10,
				noOptionsMessage: 11,
				isMulti: 17,
				activeItemIndex: 16,
				filterText: 12
			},
			[-1, -1]
		);
	}
}

/* src/Selection.svelte generated by Svelte v3.23.0 */

function add_css$3() {
	var style = element("style");
	style.id = "svelte-ch6bh7-style";
	style.textContent = ".selection.svelte-ch6bh7{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}";
	append(document.head, style);
}

function create_fragment$3(ctx) {
	let div;
	let raw_value = /*getSelectionLabel*/ ctx[0](/*item*/ ctx[1]) + "";

	return {
		c() {
			div = element("div");
			attr(div, "class", "selection svelte-ch6bh7");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			if (dirty & /*getSelectionLabel, item*/ 3 && raw_value !== (raw_value = /*getSelectionLabel*/ ctx[0](/*item*/ ctx[1]) + "")) div.innerHTML = raw_value;		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let { getSelectionLabel = undefined } = $$props;
	let { item = undefined } = $$props;

	$$self.$set = $$props => {
		if ("getSelectionLabel" in $$props) $$invalidate(0, getSelectionLabel = $$props.getSelectionLabel);
		if ("item" in $$props) $$invalidate(1, item = $$props.item);
	};

	return [getSelectionLabel, item];
}

class Selection extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-ch6bh7-style")) add_css$3();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { getSelectionLabel: 0, item: 1 });
	}
}

/* src/MultiSelection.svelte generated by Svelte v3.23.0 */

function add_css$4() {
	var style = element("style");
	style.id = "svelte-rtzfov-style";
	style.textContent = ".multiSelectItem.svelte-rtzfov.svelte-rtzfov{background:var(--multiItemBG, #EBEDEF);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px)}.multiSelectItem_label.svelte-rtzfov.svelte-rtzfov{margin:var(--multiLabelMargin, 0 5px 0 0)}.multiSelectItem.svelte-rtzfov.svelte-rtzfov:hover,.multiSelectItem.active.svelte-rtzfov.svelte-rtzfov{background-color:var(--multiItemActiveBG, #006FFF);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-rtzfov.svelte-rtzfov:hover{background:var(--multiItemDisabledHoverBg, #EBEDEF);color:var(--multiItemDisabledHoverColor, #C1C6CC)}.multiSelectItem_clear.svelte-rtzfov.svelte-rtzfov{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616F);width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-rtzfov.svelte-rtzfov:hover,.active.svelte-rtzfov .multiSelectItem_clear.svelte-rtzfov{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-rtzfov:hover svg.svelte-rtzfov,.active.svelte-rtzfov .multiSelectItem_clear svg.svelte-rtzfov{fill:var(--multiClearHoverFill, #006FFF)}.multiSelectItem_clear.svelte-rtzfov svg.svelte-rtzfov{fill:var(--multiClearFill, #EBEDEF);vertical-align:top}";
	append(document.head, style);
}

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	child_ctx[9] = i;
	return child_ctx;
}

// (22:2) {#if !isDisabled}
function create_if_block$1(ctx) {
	let div;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[6](/*i*/ ctx[9], ...args);
	}

	return {
		c() {
			div = element("div");
			div.innerHTML = `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" role="presentation" class="svelte-rtzfov"><path d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;
			attr(div, "class", "multiSelectItem_clear svelte-rtzfov");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (!mounted) {
				dispose = listen(div, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (17:0) {#each selectedValue as value, i}
function create_each_block$2(ctx) {
	let div1;
	let div0;
	let raw_value = /*getSelectionLabel*/ ctx[3](/*value*/ ctx[7]) + "";
	let t0;
	let t1;
	let div1_class_value;
	let if_block = !/*isDisabled*/ ctx[2] && create_if_block$1(ctx);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			if (if_block) if_block.c();
			t1 = space();
			attr(div0, "class", "multiSelectItem_label svelte-rtzfov");

			attr(div1, "class", div1_class_value = "multiSelectItem " + (/*activeSelectedValue*/ ctx[1] === /*i*/ ctx[9]
			? "active"
			: "") + " " + (/*isDisabled*/ ctx[2] ? "disabled" : "") + " svelte-rtzfov");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			div0.innerHTML = raw_value;
			append(div1, t0);
			if (if_block) if_block.m(div1, null);
			append(div1, t1);
		},
		p(ctx, dirty) {
			if (dirty & /*getSelectionLabel, selectedValue*/ 9 && raw_value !== (raw_value = /*getSelectionLabel*/ ctx[3](/*value*/ ctx[7]) + "")) div0.innerHTML = raw_value;
			if (!/*isDisabled*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(div1, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*activeSelectedValue, isDisabled*/ 6 && div1_class_value !== (div1_class_value = "multiSelectItem " + (/*activeSelectedValue*/ ctx[1] === /*i*/ ctx[9]
			? "active"
			: "") + " " + (/*isDisabled*/ ctx[2] ? "disabled" : "") + " svelte-rtzfov")) {
				attr(div1, "class", div1_class_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
			if (if_block) if_block.d();
		}
	};
}

function create_fragment$4(ctx) {
	let each_1_anchor;
	let each_value = /*selectedValue*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (dirty & /*activeSelectedValue, isDisabled, handleClear, getSelectionLabel, selectedValue*/ 31) {
				each_value = /*selectedValue*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let { selectedValue = [] } = $$props;
	let { activeSelectedValue = undefined } = $$props;
	let { isDisabled = false } = $$props;
	let { getSelectionLabel = undefined } = $$props;

	function handleClear(i, event) {
		event.stopPropagation();
		dispatch("multiItemClear", { i });
	}

	const click_handler = (i, event) => handleClear(i, event);

	$$self.$set = $$props => {
		if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
		if ("activeSelectedValue" in $$props) $$invalidate(1, activeSelectedValue = $$props.activeSelectedValue);
		if ("isDisabled" in $$props) $$invalidate(2, isDisabled = $$props.isDisabled);
		if ("getSelectionLabel" in $$props) $$invalidate(3, getSelectionLabel = $$props.getSelectionLabel);
	};

	return [
		selectedValue,
		activeSelectedValue,
		isDisabled,
		getSelectionLabel,
		handleClear,
		dispatch,
		click_handler
	];
}

class MultiSelection extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-rtzfov-style")) add_css$4();

		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
			selectedValue: 0,
			activeSelectedValue: 1,
			isDisabled: 2,
			getSelectionLabel: 3
		});
	}
}

function isOutOfViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  const out = {};

  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;

  return out;
}

function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;
	    
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
}

/* src/Select.svelte generated by Svelte v3.23.0 */

const { document: document_1 } = globals;

function add_css$5() {
	var style = element("style");
	style.id = "svelte-7bommo-style";
	style.textContent = ".selectContainer.svelte-7bommo.svelte-7bommo{--padding:0 0.5rem;border-radius:20px;height:2rem;position:relative;display:flex;align-items:center;padding:var(--padding);background:var(--secondary-background)}.selectContainer.svelte-7bommo input.svelte-7bommo{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0)}.selectContainer.svelte-7bommo input.svelte-7bommo::placeholder{color:var(--placeholderColor, #78848f)}.selectContainer.svelte-7bommo input.svelte-7bommo:focus{outline:none}.selectContainer.svelte-7bommo.svelte-7bommo:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-7bommo.svelte-7bommo{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-7bommo.svelte-7bommo{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-7bommo input.svelte-7bommo::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc)}.selectedItem.svelte-7bommo.svelte-7bommo{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-7bommo.svelte-7bommo:focus{outline:none}.clearSelect.svelte-7bommo.svelte-7bommo{position:absolute;right:0.3rem;top:0.3rem;bottom:0.3rem;width:1rem;color:var(--color);flex:none !important}.clearSelect.svelte-7bommo.svelte-7bommo:hover{color:var(--theme-color)}.selectContainer.focused.svelte-7bommo .clearSelect.svelte-7bommo{color:var(--theme-color)}.indicator.svelte-7bommo.svelte-7bommo{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-7bommo svg.svelte-7bommo{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-7bommo.svelte-7bommo{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-7bommo-rotate 0.75s linear infinite}.spinner_icon.svelte-7bommo.svelte-7bommo{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-7bommo.svelte-7bommo{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-7bommo.svelte-7bommo{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap}.multiSelect.svelte-7bommo>.svelte-7bommo{flex:1 1 50px}.selectContainer.multiSelect.svelte-7bommo input.svelte-7bommo{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-7bommo.svelte-7bommo{border:var(--errorBorder, 1px solid #ff2d55)}@keyframes svelte-7bommo-rotate{100%{transform:rotate(360deg)}}";
	append(document_1.head, style);
}

// (787:2) {#if Icon}
function create_if_block_6(ctx) {
	let switch_instance_anchor;
	let current;
	var switch_value = /*Icon*/ ctx[16];

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (switch_value !== (switch_value = /*Icon*/ ctx[16])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (791:2) {#if isMulti && selectedValue && selectedValue.length > 0}
function create_if_block_5(ctx) {
	let switch_instance_anchor;
	let current;
	var switch_value = /*MultiSelection*/ ctx[7];

	function switch_props(ctx) {
		return {
			props: {
				selectedValue: /*selectedValue*/ ctx[3],
				getSelectionLabel: /*getSelectionLabel*/ ctx[12],
				activeSelectedValue: /*activeSelectedValue*/ ctx[20],
				isDisabled: /*isDisabled*/ ctx[9]
			}
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
		switch_instance.$on("multiItemClear", /*handleMultiItemClear*/ ctx[24]);
		switch_instance.$on("focus", /*handleFocus*/ ctx[27]);
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = {};
			if (dirty[0] & /*selectedValue*/ 8) switch_instance_changes.selectedValue = /*selectedValue*/ ctx[3];
			if (dirty[0] & /*getSelectionLabel*/ 4096) switch_instance_changes.getSelectionLabel = /*getSelectionLabel*/ ctx[12];
			if (dirty[0] & /*activeSelectedValue*/ 1048576) switch_instance_changes.activeSelectedValue = /*activeSelectedValue*/ ctx[20];
			if (dirty[0] & /*isDisabled*/ 512) switch_instance_changes.isDisabled = /*isDisabled*/ ctx[9];

			if (switch_value !== (switch_value = /*MultiSelection*/ ctx[7])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					switch_instance.$on("multiItemClear", /*handleMultiItemClear*/ ctx[24]);
					switch_instance.$on("focus", /*handleFocus*/ ctx[27]);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

// (811:2) {:else}
function create_else_block$1(ctx) {
	let input_1;
	let mounted;
	let dispose;

	let input_1_levels = [
		/*_inputAttributes*/ ctx[21],
		{ placeholder: /*placeholderText*/ ctx[23] },
		{ style: /*inputStyles*/ ctx[14] }
	];

	let input_1_data = {};

	for (let i = 0; i < input_1_levels.length; i += 1) {
		input_1_data = assign(input_1_data, input_1_levels[i]);
	}

	return {
		c() {
			input_1 = element("input");
			set_attributes(input_1, input_1_data);
			toggle_class(input_1, "svelte-7bommo", true);
		},
		m(target, anchor) {
			insert(target, input_1, anchor);
			/*input_1_binding_1*/ ctx[74](input_1);
			set_input_value(input_1, /*filterText*/ ctx[4]);

			if (!mounted) {
				dispose = [
					listen(input_1, "focus", /*handleFocus*/ ctx[27]),
					listen(input_1, "input", /*input_1_input_handler_1*/ ctx[75])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [
				dirty[0] & /*_inputAttributes*/ 2097152 && /*_inputAttributes*/ ctx[21],
				dirty[0] & /*placeholderText*/ 8388608 && { placeholder: /*placeholderText*/ ctx[23] },
				dirty[0] & /*inputStyles*/ 16384 && { style: /*inputStyles*/ ctx[14] }
			]));

			if (dirty[0] & /*filterText*/ 16 && input_1.value !== /*filterText*/ ctx[4]) {
				set_input_value(input_1, /*filterText*/ ctx[4]);
			}

			toggle_class(input_1, "svelte-7bommo", true);
		},
		d(detaching) {
			if (detaching) detach(input_1);
			/*input_1_binding_1*/ ctx[74](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (802:2) {#if isDisabled}
function create_if_block_4(ctx) {
	let input_1;
	let mounted;
	let dispose;

	let input_1_levels = [
		/*_inputAttributes*/ ctx[21],
		{ placeholder: /*placeholderText*/ ctx[23] },
		{ style: /*inputStyles*/ ctx[14] },
		{ disabled: true }
	];

	let input_1_data = {};

	for (let i = 0; i < input_1_levels.length; i += 1) {
		input_1_data = assign(input_1_data, input_1_levels[i]);
	}

	return {
		c() {
			input_1 = element("input");
			set_attributes(input_1, input_1_data);
			toggle_class(input_1, "svelte-7bommo", true);
		},
		m(target, anchor) {
			insert(target, input_1, anchor);
			/*input_1_binding*/ ctx[72](input_1);
			set_input_value(input_1, /*filterText*/ ctx[4]);

			if (!mounted) {
				dispose = [
					listen(input_1, "focus", /*handleFocus*/ ctx[27]),
					listen(input_1, "input", /*input_1_input_handler*/ ctx[73])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [
				dirty[0] & /*_inputAttributes*/ 2097152 && /*_inputAttributes*/ ctx[21],
				dirty[0] & /*placeholderText*/ 8388608 && { placeholder: /*placeholderText*/ ctx[23] },
				dirty[0] & /*inputStyles*/ 16384 && { style: /*inputStyles*/ ctx[14] },
				{ disabled: true }
			]));

			if (dirty[0] & /*filterText*/ 16 && input_1.value !== /*filterText*/ ctx[4]) {
				set_input_value(input_1, /*filterText*/ ctx[4]);
			}

			toggle_class(input_1, "svelte-7bommo", true);
		},
		d(detaching) {
			if (detaching) detach(input_1);
			/*input_1_binding*/ ctx[72](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (821:2) {#if !isMulti && showSelectedItem}
function create_if_block_3$1(ctx) {
	let div;
	let current;
	let mounted;
	let dispose;
	var switch_value = /*Selection*/ ctx[6];

	function switch_props(ctx) {
		return {
			props: {
				item: /*selectedValue*/ ctx[3],
				getSelectionLabel: /*getSelectionLabel*/ ctx[12]
			}
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			div = element("div");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			attr(div, "class", "selectedItem svelte-7bommo");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (switch_instance) {
				mount_component(switch_instance, div, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(div, "focus", /*handleFocus*/ ctx[27]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			const switch_instance_changes = {};
			if (dirty[0] & /*selectedValue*/ 8) switch_instance_changes.item = /*selectedValue*/ ctx[3];
			if (dirty[0] & /*getSelectionLabel*/ 4096) switch_instance_changes.getSelectionLabel = /*getSelectionLabel*/ ctx[12];

			if (switch_value !== (switch_value = /*Selection*/ ctx[6])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, div, null);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (switch_instance) destroy_component(switch_instance);
			mounted = false;
			dispose();
		}
	};
}

// (830:2) {#if showSelectedItem && isClearable && !isDisabled && !isWaiting}
function create_if_block_2$1(ctx) {
	let div;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");

			div.innerHTML = `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" role="presentation" class="svelte-7bommo"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
          l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;

			attr(div, "class", "clearSelect svelte-7bommo");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (!mounted) {
				dispose = listen(div, "click", prevent_default(/*handleClear*/ ctx[19]));
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

// (846:2) {#if showChevron && !selectedValue || (!isSearchable && !isDisabled && !isWaiting && ((showSelectedItem && !isClearable) || !showSelectedItem))}
function create_if_block_1$1(ctx) {
	let div;

	return {
		c() {
			div = element("div");

			div.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" class="css-19bqh2r svelte-7bommo"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`;

			attr(div, "class", "indicator svelte-7bommo");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (864:2) {#if isWaiting}
function create_if_block$2(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.innerHTML = `<svg class="spinner_icon svelte-7bommo" viewBox="25 25 50 50"><circle class="spinner_path svelte-7bommo" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`;
			attr(div, "class", "spinner svelte-7bommo");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment$5(ctx) {
	let div;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let div_class_value;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*Icon*/ ctx[16] && create_if_block_6(ctx);
	let if_block1 = /*isMulti*/ ctx[8] && /*selectedValue*/ ctx[3] && /*selectedValue*/ ctx[3].length > 0 && create_if_block_5(ctx);

	function select_block_type(ctx, dirty) {
		if (/*isDisabled*/ ctx[9]) return create_if_block_4;
		return create_else_block$1;
	}

	let current_block_type = select_block_type(ctx, [-1]);
	let if_block2 = current_block_type(ctx);
	let if_block3 = !/*isMulti*/ ctx[8] && /*showSelectedItem*/ ctx[22] && create_if_block_3$1(ctx);
	let if_block4 = /*showSelectedItem*/ ctx[22] && /*isClearable*/ ctx[15] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5] && create_if_block_2$1(ctx);
	let if_block5 = (/*showChevron*/ ctx[17] && !/*selectedValue*/ ctx[3] || !/*isSearchable*/ ctx[13] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5] && (/*showSelectedItem*/ ctx[22] && !/*isClearable*/ ctx[15] || !/*showSelectedItem*/ ctx[22])) && create_if_block_1$1(ctx);
	let if_block6 = /*isWaiting*/ ctx[5] && create_if_block$2(ctx);

	return {
		c() {
			div = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			if (if_block1) if_block1.c();
			t1 = space();
			if_block2.c();
			t2 = space();
			if (if_block3) if_block3.c();
			t3 = space();
			if (if_block4) if_block4.c();
			t4 = space();
			if (if_block5) if_block5.c();
			t5 = space();
			if (if_block6) if_block6.c();
			attr(div, "class", div_class_value = "selectContainer " + /*containerClasses*/ ctx[18] + " svelte-7bommo");
			attr(div, "style", /*containerStyles*/ ctx[11]);
			toggle_class(div, "hasError", /*hasError*/ ctx[10]);
			toggle_class(div, "multiSelect", /*isMulti*/ ctx[8]);
			toggle_class(div, "disabled", /*isDisabled*/ ctx[9]);
			toggle_class(div, "focused", /*isFocused*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append(div, t0);
			if (if_block1) if_block1.m(div, null);
			append(div, t1);
			if_block2.m(div, null);
			append(div, t2);
			if (if_block3) if_block3.m(div, null);
			append(div, t3);
			if (if_block4) if_block4.m(div, null);
			append(div, t4);
			if (if_block5) if_block5.m(div, null);
			append(div, t5);
			if (if_block6) if_block6.m(div, null);
			/*div_binding*/ ctx[76](div);
			current = true;

			if (!mounted) {
				dispose = [
					listen(window, "click", /*handleWindowClick*/ ctx[28]),
					listen(window, "keydown", /*handleKeyDown*/ ctx[26]),
					listen(window, "resize", /*getPosition*/ ctx[25]),
					listen(div, "click", /*handleClick*/ ctx[29])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (/*Icon*/ ctx[16]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*Icon*/ 65536) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_6(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*isMulti*/ ctx[8] && /*selectedValue*/ ctx[3] && /*selectedValue*/ ctx[3].length > 0) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*isMulti, selectedValue*/ 264) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_5(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block2) {
				if_block2.p(ctx, dirty);
			} else {
				if_block2.d(1);
				if_block2 = current_block_type(ctx);

				if (if_block2) {
					if_block2.c();
					if_block2.m(div, t2);
				}
			}

			if (!/*isMulti*/ ctx[8] && /*showSelectedItem*/ ctx[22]) {
				if (if_block3) {
					if_block3.p(ctx, dirty);

					if (dirty[0] & /*isMulti, showSelectedItem*/ 4194560) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block_3$1(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(div, t3);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}

			if (/*showSelectedItem*/ ctx[22] && /*isClearable*/ ctx[15] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5]) {
				if (if_block4) {
					if_block4.p(ctx, dirty);
				} else {
					if_block4 = create_if_block_2$1(ctx);
					if_block4.c();
					if_block4.m(div, t4);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}

			if (/*showChevron*/ ctx[17] && !/*selectedValue*/ ctx[3] || !/*isSearchable*/ ctx[13] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5] && (/*showSelectedItem*/ ctx[22] && !/*isClearable*/ ctx[15] || !/*showSelectedItem*/ ctx[22])) {
				if (if_block5) ; else {
					if_block5 = create_if_block_1$1(ctx);
					if_block5.c();
					if_block5.m(div, t5);
				}
			} else if (if_block5) {
				if_block5.d(1);
				if_block5 = null;
			}

			if (/*isWaiting*/ ctx[5]) {
				if (if_block6) ; else {
					if_block6 = create_if_block$2(ctx);
					if_block6.c();
					if_block6.m(div, null);
				}
			} else if (if_block6) {
				if_block6.d(1);
				if_block6 = null;
			}

			if (!current || dirty[0] & /*containerClasses*/ 262144 && div_class_value !== (div_class_value = "selectContainer " + /*containerClasses*/ ctx[18] + " svelte-7bommo")) {
				attr(div, "class", div_class_value);
			}

			if (!current || dirty[0] & /*containerStyles*/ 2048) {
				attr(div, "style", /*containerStyles*/ ctx[11]);
			}

			if (dirty[0] & /*containerClasses, hasError*/ 263168) {
				toggle_class(div, "hasError", /*hasError*/ ctx[10]);
			}

			if (dirty[0] & /*containerClasses, isMulti*/ 262400) {
				toggle_class(div, "multiSelect", /*isMulti*/ ctx[8]);
			}

			if (dirty[0] & /*containerClasses, isDisabled*/ 262656) {
				toggle_class(div, "disabled", /*isDisabled*/ ctx[9]);
			}

			if (dirty[0] & /*containerClasses, isFocused*/ 262148) {
				toggle_class(div, "focused", /*isFocused*/ ctx[2]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			transition_in(if_block3);
			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			transition_out(if_block3);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if_block2.d();
			if (if_block3) if_block3.d();
			if (if_block4) if_block4.d();
			if (if_block5) if_block5.d();
			if (if_block6) if_block6.d();
			/*div_binding*/ ctx[76](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let { container = undefined } = $$props;
	let { input = undefined } = $$props;
	let { Item: Item$$1 = Item } = $$props;
	let { Selection: Selection$$1 = Selection } = $$props;
	let { MultiSelection: MultiSelection$$1 = MultiSelection } = $$props;
	let { isMulti = false } = $$props;
	let { isDisabled = false } = $$props;
	let { isCreatable = false } = $$props;
	let { isFocused = false } = $$props;
	let { selectedValue = undefined } = $$props;
	let { filterText = "" } = $$props;
	let { placeholder = "Select..." } = $$props;
	let { items = [] } = $$props;
	let { itemFilter = (label, filterText, option) => label.toLowerCase().includes(filterText.toLowerCase()) } = $$props;
	let { groupBy = undefined } = $$props;
	let { groupFilter = groups => groups } = $$props;
	let { isGroupHeaderSelectable = false } = $$props;

	let { getGroupHeaderLabel = option => {
		return option.label;
	} } = $$props;

	let { getOptionLabel = (option, filterText) => {
		return option.isCreator
		? `Create \"${filterText}\"`
		: option.label;
	} } = $$props;

	let { optionIdentifier = "value" } = $$props;
	let { loadOptions = undefined } = $$props;
	let { hasError = false } = $$props;
	let { containerStyles = "" } = $$props;

	let { getSelectionLabel = option => {
		if (option) return option.label;
	} } = $$props;

	let { createGroupHeaderItem = groupValue => {
		return { value: groupValue, label: groupValue };
	} } = $$props;

	let { createItem = filterText => {
		return { value: filterText, label: filterText };
	} } = $$props;

	let { isSearchable = true } = $$props;
	let { inputStyles = "" } = $$props;
	let { isClearable = true } = $$props;
	let { isWaiting = false } = $$props;
	let { listPlacement = "auto" } = $$props;
	let { listOpen = false } = $$props;
	let { list = undefined } = $$props;
	let { isVirtualList = false } = $$props;
	let { loadOptionsInterval = 300 } = $$props;
	let { noOptionsMessage = "No options" } = $$props;
	let { hideEmptyState = false } = $$props;
	let { filteredItems = [] } = $$props;
	let { inputAttributes = {} } = $$props;
	let { listAutoWidth = true } = $$props;
	let { itemHeight = 40 } = $$props;
	let { Icon = undefined } = $$props;
	let { showChevron = false } = $$props;
	let { containerClasses = "" } = $$props;
	let target;
	let activeSelectedValue;
	let _items = [];
	let originalItemsClone;
	let prev_selectedValue;
	let prev_listOpen;
	let prev_filterText;
	let prev_isFocused;
	let prev_filteredItems;

	async function resetFilter() {
		await tick();
		$$invalidate(4, filterText = "");
	}

	let getItemsHasInvoked = false;

	const getItems = debounce(
		async () => {
			getItemsHasInvoked = true;
			$$invalidate(5, isWaiting = true);
			$$invalidate(30, items = await loadOptions(filterText));
			$$invalidate(5, isWaiting = false);
			$$invalidate(2, isFocused = true);
			$$invalidate(31, listOpen = true);
		},
		loadOptionsInterval
	);

	let _inputAttributes = {};

	beforeUpdate(() => {
		if (isMulti && selectedValue && selectedValue.length > 1) {
			checkSelectedValueForDuplicates();
		}

		if (!isMulti && selectedValue && prev_selectedValue !== selectedValue) {
			if (!prev_selectedValue || JSON.stringify(selectedValue[optionIdentifier]) !== JSON.stringify(prev_selectedValue[optionIdentifier])) {
				dispatch("select", selectedValue);
			}
		}

		if (isMulti && JSON.stringify(selectedValue) !== JSON.stringify(prev_selectedValue)) {
			if (checkSelectedValueForDuplicates()) {
				dispatch("select", selectedValue);
			}
		}

		if (container && listOpen !== prev_listOpen) {
			if (listOpen) {
				loadList();
			} else {
				removeList();
			}
		}

		if (filterText !== prev_filterText) {
			if (filterText.length > 0) {
				$$invalidate(2, isFocused = true);
				$$invalidate(31, listOpen = true);

				if (loadOptions) {
					getItems();
				} else {
					loadList();
					$$invalidate(31, listOpen = true);

					if (isMulti) {
						$$invalidate(20, activeSelectedValue = undefined);
					}
				}
			} else {
				setList([]);
			}

			if (list) {
				list.$set({ filterText });
			}
		}

		if (isFocused !== prev_isFocused) {
			if (isFocused || listOpen) {
				handleFocus();
			} else {
				resetFilter();
				if (input) input.blur();
			}
		}

		if (prev_filteredItems !== filteredItems) {
			let _filteredItems = [...filteredItems];

			if (isCreatable && filterText) {
				const itemToCreate = createItem(filterText);
				itemToCreate.isCreator = true;

				const existingItemWithFilterValue = _filteredItems.find(item => {
					return item[optionIdentifier] === itemToCreate[optionIdentifier];
				});

				let existingSelectionWithFilterValue;

				if (selectedValue) {
					if (isMulti) {
						existingSelectionWithFilterValue = selectedValue.find(selection => {
							return selection[optionIdentifier] === itemToCreate[optionIdentifier];
						});
					} else if (selectedValue[optionIdentifier] === itemToCreate[optionIdentifier]) {
						existingSelectionWithFilterValue = selectedValue;
					}
				}

				if (!existingItemWithFilterValue && !existingSelectionWithFilterValue) {
					_filteredItems = [..._filteredItems, itemToCreate];
				}
			}

			setList(_filteredItems);
		}

		prev_selectedValue = selectedValue;
		prev_listOpen = listOpen;
		prev_filterText = filterText;
		prev_isFocused = isFocused;
		prev_filteredItems = filteredItems;
	});

	function checkSelectedValueForDuplicates() {
		let noDuplicates = true;

		if (selectedValue) {
			const ids = [];
			const uniqueValues = [];

			selectedValue.forEach(val => {
				if (!ids.includes(val[optionIdentifier])) {
					ids.push(val[optionIdentifier]);
					uniqueValues.push(val);
				} else {
					noDuplicates = false;
				}
			});

			$$invalidate(3, selectedValue = uniqueValues);
		}

		return noDuplicates;
	}

	async function setList(items) {
		await tick();
		if (list) return list.$set({ items });
		if (loadOptions && getItemsHasInvoked && items.length > 0) loadList();
	}

	function handleMultiItemClear(event) {
		const { detail } = event;
		const itemToRemove = selectedValue[detail ? detail.i : selectedValue.length - 1];

		if (selectedValue.length === 1) {
			$$invalidate(3, selectedValue = undefined);
		} else {
			$$invalidate(3, selectedValue = selectedValue.filter(item => {
				return item !== itemToRemove;
			}));
		}

		dispatch("clear", itemToRemove);
		getPosition();
	}

	async function getPosition() {
		await tick();
		if (!target || !container) return;
		const { top, height, width } = container.getBoundingClientRect();
		target.style["min-width"] = `${width}px`;
		target.style.width = `${listAutoWidth ? "auto" : "100%"}`;
		target.style.left = "0";

		if (listPlacement === "top") {
			target.style.bottom = `${height + 5}px`;
		} else {
			target.style.top = `${height + 5}px`;
		}

		target = target;

		if (listPlacement === "auto" && isOutOfViewport(target).bottom) {
			target.style.top = ``;
			target.style.bottom = `${height + 5}px`;
		}

		target.style.visibility = "";
	}

	function handleKeyDown(e) {
		if (!isFocused) return;

		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();
				$$invalidate(31, listOpen = true);
				$$invalidate(20, activeSelectedValue = undefined);
				break;
			case "ArrowUp":
				e.preventDefault();
				$$invalidate(31, listOpen = true);
				$$invalidate(20, activeSelectedValue = undefined);
				break;
			case "Tab":
				if (!listOpen) $$invalidate(2, isFocused = false);
				break;
			case "Backspace":
				if (!isMulti || filterText.length > 0) return;
				if (isMulti && selectedValue && selectedValue.length > 0) {
					handleMultiItemClear(activeSelectedValue !== undefined
					? activeSelectedValue
					: selectedValue.length - 1);

					if (activeSelectedValue === 0 || activeSelectedValue === undefined) break;

					$$invalidate(20, activeSelectedValue = selectedValue.length > activeSelectedValue
					? activeSelectedValue - 1
					: undefined);
				}
				break;
			case "ArrowLeft":
				if (list) list.$set({ hoverItemIndex: -1 });
				if (!isMulti || filterText.length > 0) return;
				if (activeSelectedValue === undefined) {
					$$invalidate(20, activeSelectedValue = selectedValue.length - 1);
				} else if (selectedValue.length > activeSelectedValue && activeSelectedValue !== 0) {
					$$invalidate(20, activeSelectedValue -= 1);
				}
				break;
			case "ArrowRight":
				if (list) list.$set({ hoverItemIndex: -1 });
				if (!isMulti || filterText.length > 0 || activeSelectedValue === undefined) return;
				if (activeSelectedValue === selectedValue.length - 1) {
					$$invalidate(20, activeSelectedValue = undefined);
				} else if (activeSelectedValue < selectedValue.length - 1) {
					$$invalidate(20, activeSelectedValue += 1);
				}
				break;
		}
	}

	function handleFocus() {
		$$invalidate(2, isFocused = true);
		if (input) input.focus();
	}

	function removeList() {
		resetFilter();
		$$invalidate(20, activeSelectedValue = undefined);
		if (!list) return;
		list.$destroy();
		$$invalidate(32, list = undefined);
		if (!target) return;
		if (target.parentNode) target.parentNode.removeChild(target);
		target = undefined;
		$$invalidate(32, list);
		target = target;
	}

	function handleWindowClick(event) {
		if (!container) return;

		const eventTarget = event.path && event.path.length > 0
		? event.path[0]
		: event.target;

		if (container.contains(eventTarget)) return;
		$$invalidate(2, isFocused = false);
		$$invalidate(31, listOpen = false);
		$$invalidate(20, activeSelectedValue = undefined);
		if (input) input.blur();
	}

	function handleClick() {
		if (isDisabled) return;
		$$invalidate(2, isFocused = true);
		$$invalidate(31, listOpen = !listOpen);
	}

	function handleClear() {
		$$invalidate(3, selectedValue = undefined);
		$$invalidate(31, listOpen = false);
		dispatch("clear", selectedValue);
		handleFocus();
	}

	async function loadList() {
		await tick();
		if (target && list) return;

		const data = {
			Item: Item$$1,
			filterText,
			optionIdentifier,
			noOptionsMessage,
			hideEmptyState,
			isVirtualList,
			selectedValue,
			isMulti,
			getGroupHeaderLabel,
			items: filteredItems,
			itemHeight
		};

		if (getOptionLabel) {
			data.getOptionLabel = getOptionLabel;
		}

		target = document.createElement("div");

		Object.assign(target.style, {
			position: "absolute",
			"z-index": 2,
			visibility: "hidden"
		});

		$$invalidate(32, list);
		target = target;
		if (container) container.appendChild(target);
		$$invalidate(32, list = new List({ target, props: data }));

		list.$on("itemSelected", event => {
			const { detail } = event;

			if (detail) {
				const item = Object.assign({}, detail);

				if (!item.isGroupHeader || item.isSelectable) {
					if (isMulti) {
						$$invalidate(3, selectedValue = selectedValue ? selectedValue.concat([item]) : [item]);
					} else {
						$$invalidate(3, selectedValue = item);
					}

					resetFilter();
					($$invalidate(3, selectedValue), $$invalidate(43, optionIdentifier));

					setTimeout(() => {
						$$invalidate(31, listOpen = false);
						$$invalidate(20, activeSelectedValue = undefined);
					});
				}
			}
		});

		list.$on("itemCreated", event => {
			const { detail } = event;

			if (isMulti) {
				$$invalidate(3, selectedValue = selectedValue || []);
				$$invalidate(3, selectedValue = [...selectedValue, createItem(detail)]);
			} else {
				$$invalidate(3, selectedValue = createItem(detail));
			}

			$$invalidate(4, filterText = "");
			$$invalidate(31, listOpen = false);
			$$invalidate(20, activeSelectedValue = undefined);
			resetFilter();
		});

		list.$on("closeList", () => {
			$$invalidate(31, listOpen = false);
		});

		($$invalidate(32, list), target = target);
		getPosition();
	}

	onMount(() => {
		if (isFocused) input.focus();
		if (listOpen) loadList();

		if (items && items.length > 0) {
			$$invalidate(56, originalItemsClone = JSON.stringify(items));
		}

		if (selectedValue) {
			if (isMulti) {
				$$invalidate(3, selectedValue = selectedValue.map(item => {
					if (typeof item === "string") {
						return { value: item, label: item };
					} else {
						return item;
					}
				}));
			}
		}
	});

	onDestroy(() => {
		removeList();
	});

	function input_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(1, input = $$value);
		});
	}

	function input_1_input_handler() {
		filterText = this.value;
		$$invalidate(4, filterText);
	}

	function input_1_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(1, input = $$value);
		});
	}

	function input_1_input_handler_1() {
		filterText = this.value;
		$$invalidate(4, filterText);
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			$$invalidate(0, container = $$value);
		});
	}

	$$self.$set = $$props => {
		if ("container" in $$props) $$invalidate(0, container = $$props.container);
		if ("input" in $$props) $$invalidate(1, input = $$props.input);
		if ("Item" in $$props) $$invalidate(34, Item$$1 = $$props.Item);
		if ("Selection" in $$props) $$invalidate(6, Selection$$1 = $$props.Selection);
		if ("MultiSelection" in $$props) $$invalidate(7, MultiSelection$$1 = $$props.MultiSelection);
		if ("isMulti" in $$props) $$invalidate(8, isMulti = $$props.isMulti);
		if ("isDisabled" in $$props) $$invalidate(9, isDisabled = $$props.isDisabled);
		if ("isCreatable" in $$props) $$invalidate(35, isCreatable = $$props.isCreatable);
		if ("isFocused" in $$props) $$invalidate(2, isFocused = $$props.isFocused);
		if ("selectedValue" in $$props) $$invalidate(3, selectedValue = $$props.selectedValue);
		if ("filterText" in $$props) $$invalidate(4, filterText = $$props.filterText);
		if ("placeholder" in $$props) $$invalidate(36, placeholder = $$props.placeholder);
		if ("items" in $$props) $$invalidate(30, items = $$props.items);
		if ("itemFilter" in $$props) $$invalidate(37, itemFilter = $$props.itemFilter);
		if ("groupBy" in $$props) $$invalidate(38, groupBy = $$props.groupBy);
		if ("groupFilter" in $$props) $$invalidate(39, groupFilter = $$props.groupFilter);
		if ("isGroupHeaderSelectable" in $$props) $$invalidate(40, isGroupHeaderSelectable = $$props.isGroupHeaderSelectable);
		if ("getGroupHeaderLabel" in $$props) $$invalidate(41, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
		if ("getOptionLabel" in $$props) $$invalidate(42, getOptionLabel = $$props.getOptionLabel);
		if ("optionIdentifier" in $$props) $$invalidate(43, optionIdentifier = $$props.optionIdentifier);
		if ("loadOptions" in $$props) $$invalidate(44, loadOptions = $$props.loadOptions);
		if ("hasError" in $$props) $$invalidate(10, hasError = $$props.hasError);
		if ("containerStyles" in $$props) $$invalidate(11, containerStyles = $$props.containerStyles);
		if ("getSelectionLabel" in $$props) $$invalidate(12, getSelectionLabel = $$props.getSelectionLabel);
		if ("createGroupHeaderItem" in $$props) $$invalidate(45, createGroupHeaderItem = $$props.createGroupHeaderItem);
		if ("createItem" in $$props) $$invalidate(46, createItem = $$props.createItem);
		if ("isSearchable" in $$props) $$invalidate(13, isSearchable = $$props.isSearchable);
		if ("inputStyles" in $$props) $$invalidate(14, inputStyles = $$props.inputStyles);
		if ("isClearable" in $$props) $$invalidate(15, isClearable = $$props.isClearable);
		if ("isWaiting" in $$props) $$invalidate(5, isWaiting = $$props.isWaiting);
		if ("listPlacement" in $$props) $$invalidate(47, listPlacement = $$props.listPlacement);
		if ("listOpen" in $$props) $$invalidate(31, listOpen = $$props.listOpen);
		if ("list" in $$props) $$invalidate(32, list = $$props.list);
		if ("isVirtualList" in $$props) $$invalidate(48, isVirtualList = $$props.isVirtualList);
		if ("loadOptionsInterval" in $$props) $$invalidate(49, loadOptionsInterval = $$props.loadOptionsInterval);
		if ("noOptionsMessage" in $$props) $$invalidate(50, noOptionsMessage = $$props.noOptionsMessage);
		if ("hideEmptyState" in $$props) $$invalidate(51, hideEmptyState = $$props.hideEmptyState);
		if ("filteredItems" in $$props) $$invalidate(33, filteredItems = $$props.filteredItems);
		if ("inputAttributes" in $$props) $$invalidate(52, inputAttributes = $$props.inputAttributes);
		if ("listAutoWidth" in $$props) $$invalidate(53, listAutoWidth = $$props.listAutoWidth);
		if ("itemHeight" in $$props) $$invalidate(54, itemHeight = $$props.itemHeight);
		if ("Icon" in $$props) $$invalidate(16, Icon = $$props.Icon);
		if ("showChevron" in $$props) $$invalidate(17, showChevron = $$props.showChevron);
		if ("containerClasses" in $$props) $$invalidate(18, containerClasses = $$props.containerClasses);
	};

	let disabled;
	let showSelectedItem;
	let placeholderText;

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*isDisabled*/ 512) {
			$: disabled = isDisabled;
		}

		if ($$self.$$.dirty[0] & /*selectedValue*/ 8 | $$self.$$.dirty[1] & /*optionIdentifier*/ 4096) {
			$: {
				if (typeof selectedValue === "string") {
					$$invalidate(3, selectedValue = {
						[optionIdentifier]: selectedValue,
						label: selectedValue
					});
				}
			}
		}

		if ($$self.$$.dirty[0] & /*selectedValue, filterText*/ 24) {
			$: $$invalidate(22, showSelectedItem = selectedValue && filterText.length === 0);
		}

		if ($$self.$$.dirty[0] & /*selectedValue*/ 8 | $$self.$$.dirty[1] & /*placeholder*/ 32) {
			$: $$invalidate(23, placeholderText = selectedValue ? "" : placeholder);
		}

		if ($$self.$$.dirty[0] & /*isSearchable*/ 8192 | $$self.$$.dirty[1] & /*inputAttributes*/ 2097152) {
			$: {
				$$invalidate(21, _inputAttributes = Object.assign(inputAttributes, {
					autocomplete: "off",
					autocorrect: "off",
					spellcheck: false
				}));

				if (!isSearchable) {
					$$invalidate(21, _inputAttributes.readonly = true, _inputAttributes);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*items, filterText, isMulti, selectedValue*/ 1073742104 | $$self.$$.dirty[1] & /*loadOptions, originalItemsClone, optionIdentifier, itemFilter, getOptionLabel, groupBy, createGroupHeaderItem, isGroupHeaderSelectable, groupFilter*/ 33586112) {
			$: {
				let _filteredItems;
				let _items = items;

				if (items && items.length > 0 && typeof items[0] !== "object") {
					_items = items.map((item, index) => {
						return { index, value: item, label: item };
					});
				}

				if (loadOptions && filterText.length === 0 && originalItemsClone) {
					_filteredItems = JSON.parse(originalItemsClone);
					_items = JSON.parse(originalItemsClone);
				} else {
					_filteredItems = loadOptions
					? filterText.length === 0 ? [] : _items
					: _items.filter(item => {
							let keepItem = true;

							if (isMulti && selectedValue) {
								keepItem = !selectedValue.find(value => {
									return value[optionIdentifier] === item[optionIdentifier];
								});
							}

							if (!keepItem) return false;
							if (filterText.length < 1) return true;
							return itemFilter(getOptionLabel(item, filterText), filterText, item);
						});
				}

				if (groupBy) {
					const groupValues = [];
					const groups = {};

					_filteredItems.forEach(item => {
						const groupValue = groupBy(item);

						if (!groupValues.includes(groupValue)) {
							groupValues.push(groupValue);
							groups[groupValue] = [];

							if (groupValue) {
								groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
									id: groupValue,
									isGroupHeader: true,
									isSelectable: isGroupHeaderSelectable
								}));
							}
						}

						groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
					});

					const sortedGroupedItems = [];

					groupFilter(groupValues).forEach(groupValue => {
						sortedGroupedItems.push(...groups[groupValue]);
					});

					$$invalidate(33, filteredItems = sortedGroupedItems);
				} else {
					$$invalidate(33, filteredItems = _filteredItems);
				}
			}
		}
	};

	return [
		container,
		input,
		isFocused,
		selectedValue,
		filterText,
		isWaiting,
		Selection$$1,
		MultiSelection$$1,
		isMulti,
		isDisabled,
		hasError,
		containerStyles,
		getSelectionLabel,
		isSearchable,
		inputStyles,
		isClearable,
		Icon,
		showChevron,
		containerClasses,
		handleClear,
		activeSelectedValue,
		_inputAttributes,
		showSelectedItem,
		placeholderText,
		handleMultiItemClear,
		getPosition,
		handleKeyDown,
		handleFocus,
		handleWindowClick,
		handleClick,
		items,
		listOpen,
		list,
		filteredItems,
		Item$$1,
		isCreatable,
		placeholder,
		itemFilter,
		groupBy,
		groupFilter,
		isGroupHeaderSelectable,
		getGroupHeaderLabel,
		getOptionLabel,
		optionIdentifier,
		loadOptions,
		createGroupHeaderItem,
		createItem,
		listPlacement,
		isVirtualList,
		loadOptionsInterval,
		noOptionsMessage,
		hideEmptyState,
		inputAttributes,
		listAutoWidth,
		itemHeight,
		target,
		originalItemsClone,
		prev_selectedValue,
		prev_listOpen,
		prev_filterText,
		prev_isFocused,
		prev_filteredItems,
		getItemsHasInvoked,
		disabled,
		dispatch,
		_items,
		resetFilter,
		getItems,
		checkSelectedValueForDuplicates,
		setList,
		removeList,
		loadList,
		input_1_binding,
		input_1_input_handler,
		input_1_binding_1,
		input_1_input_handler_1,
		div_binding
	];
}

class Select extends SvelteComponent {
	constructor(options) {
		super();
		if (!document_1.getElementById("svelte-7bommo-style")) add_css$5();

		init(
			this,
			options,
			instance$5,
			create_fragment$5,
			safe_not_equal,
			{
				container: 0,
				input: 1,
				Item: 34,
				Selection: 6,
				MultiSelection: 7,
				isMulti: 8,
				isDisabled: 9,
				isCreatable: 35,
				isFocused: 2,
				selectedValue: 3,
				filterText: 4,
				placeholder: 36,
				items: 30,
				itemFilter: 37,
				groupBy: 38,
				groupFilter: 39,
				isGroupHeaderSelectable: 40,
				getGroupHeaderLabel: 41,
				getOptionLabel: 42,
				optionIdentifier: 43,
				loadOptions: 44,
				hasError: 10,
				containerStyles: 11,
				getSelectionLabel: 12,
				createGroupHeaderItem: 45,
				createItem: 46,
				isSearchable: 13,
				inputStyles: 14,
				isClearable: 15,
				isWaiting: 5,
				listPlacement: 47,
				listOpen: 31,
				list: 32,
				isVirtualList: 48,
				loadOptionsInterval: 49,
				noOptionsMessage: 50,
				hideEmptyState: 51,
				filteredItems: 33,
				inputAttributes: 52,
				listAutoWidth: 53,
				itemHeight: 54,
				Icon: 16,
				showChevron: 17,
				containerClasses: 18,
				handleClear: 19
			},
			[-1, -1, -1]
		);
	}

	get handleClear() {
		return this.$$.ctx[19];
	}
}

export default Select;
